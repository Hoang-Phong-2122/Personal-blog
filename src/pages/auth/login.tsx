import React, { useEffect, useState } from 'react'
import {
   Box,
   Button,
   TextField,
   Typography,
   InputAdornment,
   FormControl,
   InputLabel,
   OutlinedInput,
   IconButton,
   Link,
   FormHelperText,
} from '@mui/material'
import { MailOutline, Lock, VisibilityOff, Visibility } from '@mui/icons-material'
import { Image } from 'antd'
import toast from 'react-hot-toast'
import { useAuth } from '../../hooks/use-auth'
import { useMounted } from '../../hooks/use-mounted'
import * as Yup from 'yup'
import { useNavigate } from 'react-router'
import { withGuestGuard } from '../../hocs/with-guest-guard'

const Login = () => {
   const { login } = useAuth()
   const isMounted = useMounted()
   const navigate = useNavigate()
   const [showPassword, setShowPassword] = useState(false)
   // const [username, setUsername] = useState('TW_001');
   // const [password, setPassword] = useState('elmis@2022');
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [require, setRequire] = useState({
      username: false,
      password: false,
   })
   const [error, setError] = useState({
      username: '',
      password: '',
      login: '',
   })

   const _setRequire = (newState: any) => {
      setRequire((prev) => ({
         ...prev,
         ...newState,
      }))
   }

   const _setError = (newState: any) => {
      setError((prev) => ({
         ...prev,
         ...newState,
      }))
   }

   useEffect(() => {
      console.log('tk,mk', { username, password })
   }, [username, password])

   useEffect(() => {
      const auth = window.localStorage.getItem('user')
      if (auth) {
         navigate('/')
      }
   }, [])

   const onLogin = async () => {
      let u = username.trim()
      let p = password.trim()
      if (u == '' || p == '') {
         // toast.error('Vui lòng nhập đầy đủ thông tin để tiếp tục!');
         _setError({
            username: u && 'Vui lòng nhập username!',
            password: p && 'Vui lòng nhập password!',
         })
         _setRequire({ username: u == '', password: p == '' })
         return
      }
      try {
         await login(u, p)
         if (isMounted()) {
            navigate('/')
         }
      } catch (error) {
         console.log('error', error)
         // @ts-ignore
         _setError({ login: error?.message })
         _setRequire({ username: true, password: true })
      }
   }

   const handleClickShowPassword = () => setShowPassword((show) => !show)

   const handleMouseDownPassword = (event: any) => {
      event.preventDefault()
   }

   return (
      <Box
         sx={{
            display: 'flex',
            width: '100%',
            height: window.innerHeight + 'px',
            backgroundImage: `url('/static/auth/auth-bg-banner.png')`,
         }}
      >
         <Box
            sx={{
               margin: 'auto',
               width: 539,
               height: 625,
               borderRadius: 2,
               background: 'white',
               padding: 12,
            }}
         >
            <Box
               sx={{
                  marginBottom: 8,
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
               }}
            >
               <Image preview={false} src={'/logo.png'} width={43} />
               <Typography
                  sx={{
                     fontSize: 31,
                     fontWeight: 700,
                     color: '#4A92DF',
                     ml: 1,
                  }}
               >
                  eLMIS
               </Typography>
            </Box>
            <Box>
               <Typography variant="h2">Đăng nhập</Typography>
               <Typography className="margin-y" sx={{ fontSize: 15, fontWeight: 600, my: 1 }}>
                  Đăng nhập tài khoản
               </Typography>
               <TextField
                  sx={{ my: 1 }}
                  label="Tên tài khoản"
                  fullWidth
                  error={require.username}
                  helperText={require.username && error.username}
                  name="username"
                  onChange={(event) => {
                     let value = event.target.value
                     if (value != '') {
                        _setRequire({ username: false })
                        _setError({ username: '' })
                     }
                     setUsername(value)
                  }}
                  value={username}
                  InputProps={{
                     startAdornment: (
                        <InputAdornment position="start">
                           <MailOutline sx={{ color: 'grey' }} />
                        </InputAdornment>
                     ),
                  }}
               />
               <TextField
                  sx={{ my: 1 }}
                  label="Mật khẩu"
                  fullWidth
                  type="password"
                  error={require.password}
                  helperText={require.password && error.password}
                  name="password"
                  onChange={(event) => {
                     let value = event.target.value
                     if (value != '') {
                        _setRequire({ password: false })
                        _setError({ password: '' })
                     }
                     setPassword(value)
                  }}
                  value={password}
                  InputProps={{
                     startAdornment: (
                        <InputAdornment position="start">
                           <Lock sx={{ color: 'grey' }} />
                        </InputAdornment>
                     ),
                  }}
               />
               {error.login && (
                  <Box sx={{ mt: 3 }}>
                     <FormHelperText error>{error.login}</FormHelperText>
                  </Box>
               )}
               <Button sx={{ my: 1 }} fullWidth variant="contained" color={'primary'} onClick={onLogin}>
                  Tiếp tục
               </Button>
               <Typography sx={{ fontSize: 14, fontWeight: 400, my: 1 }}>
                  Bạn chưa có tài khoản?{' '}
                  <Link href="#" sx={{ color: 'black', fontWeight: 500 }}>
                     Đăng ký
                  </Link>
               </Typography>
            </Box>
         </Box>
      </Box>
   )
}
export default withGuestGuard(Login)
