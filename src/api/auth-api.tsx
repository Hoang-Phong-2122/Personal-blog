import type { User } from '../types/user'
import { sign, decode, JWT_SECRET, JWT_EXPIRES_IN } from '../utils/jwt'
import { apiLink } from '../utils/apiLink'
import axios from 'axios'

const users = [
   {
      id: '5e86809283e28b96d2d38537',
      avatar: '/static/mock-images/avatars/avatar-anika_visser.png',
      email: 'demo@devias.io',
      name: 'Anika Visser',
      password: 'Password123!',
      plan: 'Premium',
   },
]

class AuthApi {
   // @ts-ignore
   async login({ username, password }): Promise<User> {
      let responseData: any

      let headers = {
         'Content-Type': 'application/json',
      }
      let data = {
         username: username,
         password: password,
      }
      let requestOptions = {
         url: apiLink.AUTHENTICATE,
         method: 'POST',
         headers,
         data,
         timeout: 60000,
      }
      console.log('requestOptions', requestOptions)
      await axios(requestOptions)
         .then((rp) => {
            console.log('rp', rp)
            if (rp.status == 200) {
               if (rp.data.status == 1) {
                  responseData = { status: 1, data: rp.data }
               } else if (rp.data.status == 0) {
                  responseData = { status: 0, message: rp.data.mess }
               } else {
                  responseData = { status: 0, message: rp.data.mess }
               }
            } else if (rp.status == 401) {
               responseData = {
                  status: 0,
                  message: 'Tài khoản hoặc mật khẩu không hợp lệ',
               }
            } else {
            }
         })
         .catch(function (error) {
            console.log('login error: ', error)
            if (error.response) {
               responseData = { status: 0, message: 'Đã có lỗi xảy ra!' }
            } else if (error.request) {
               if (error.request.timeout) {
                  responseData = {
                     status: 0,
                     message: 'Kết nối tới hệ thống thất bại. Vui lòng thử lại',
                  }
               } else {
                  responseData = {
                     status: 0,
                     message: 'Kết nối wifi/4G/3G/GPRS bị gián đoạn. Vui lòng kiểm tra lại',
                  }
               }
            } else {
               responseData = { status: 0, mess: error.message }
            }
         })

      console.log('responseData', responseData)
      return new Promise((resolve, reject) => {
         try {
            if (responseData.status == 0) {
               reject(new Error(responseData.message))
            }

            console.log('responseDatain', responseData)
            let user: User = responseData.data.user
            resolve(user)
         } catch (err) {
            console.error('[Auth Api]: ', err)
            reject(new Error('Internal server error'))
         }
      })
   }

   // @ts-ignore
   async getMenu(accessToken: String): Promise<[]> {
      let responseData: any

      // @ts-ignore
      // await GetDataParam({method: 'get', token: accessToken, url: `${apiLink.APP_MENU}`}).then((response) => {
      //     console.log('menu response', response);
      //     if (response.status == 1){
      //         responseData = {
      //             data: response.data,
      //             status: 1
      //         }
      //     }else {
      //         responseData = {status: 0, message: response.data.mess}
      //     }
      // });

      console.log('responseData', responseData)
      return new Promise((resolve, reject) => {
         try {
            if (responseData.status == 0) {
               reject(new Error(responseData.message))
            }

            console.log('responseDatain', responseData)
            let data: [] = responseData.data
            resolve(data)
         } catch (err) {
            console.error('[Auth Api]: ', err)
            reject(new Error('Internal server error'))
         }
      })
   }

   // @ts-ignore
   async register({ email, name, password }): Promise<string> {
      return new Promise((resolve, reject) => {
         try {
            // Check if a user already exists
            let user = users.find((_user) => _user.email === email)

            if (user) {
               reject(new Error('User already exists'))
               return
            }

            user = {
               // @ts-ignore
               id: 123,
               // @ts-ignore
               avatar: null,
               email,
               name,
               password,
               plan: 'Standard',
            }

            // @ts-ignore
            users.push(user)

            const accessToken = sign(
               // @ts-ignore
               { userId: user.id },
               JWT_SECRET,
               { expiresIn: JWT_EXPIRES_IN }
            )

            resolve(accessToken)
         } catch (err) {
            console.error('[Auth Api]: ', err)
            reject(new Error('Internal server error'))
         }
      })
   }

   me(accessToken: string): Promise<User> {
      return new Promise((resolve, reject) => {
         try {
            // Decode access token
            const { userId } = decode(accessToken) as any

            // Find the user
            const user = users.find((_user) => _user.id === userId)

            if (!user) {
               reject(new Error('Invalid authorization token'))
               return
            }

            // @ts-ignore
            resolve({
               id: 1,
               email: user.email,
            })
         } catch (err) {
            console.error('[Auth Api]: ', err)
            reject(new Error('Internal server error'))
         }
      })
   }
}

export const authApi = new AuthApi()
