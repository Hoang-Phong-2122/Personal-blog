import { FC, ReactNode, useEffect, useState } from 'react'
import { useAuth } from '../../hooks/use-auth'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { getMenuKeyByUrl } from '../../utils/utils'
import { EXCEPT_ROUTE } from './authConst'
import { MENU } from '../../utils/const'
import PropTypes from 'prop-types'

interface AuthGuardProps {
   children: ReactNode
}

export const AuthGuard: FC<AuthGuardProps> = (props) => {
   const { children } = props
   const route = window.location.pathname + window.location.search
   const auth = useAuth()
   const navigate = useNavigate()
   const [checked, setChecked] = useState(true)

   useEffect(() => {
      // if (!auth.isAuthenticated) {
      //     navigate('/login');
      // } else {
      //     // let key = getMenuKeyByUrl(MENU, route);
      //     if(EXCEPT_ROUTE.includes(route)){
      //         setChecked(true)
      //     } else {
      //         setChecked(true);
      //     }
      // }
   }, [auth.isAuthenticated])

   if (!checked) {
      return null
   }

   // If got here, it means that the redirect did not occur, and that tells us that the user is
   // authenticated / authorized.

   return <>{children}</>
}

AuthGuard.propTypes = {
   children: PropTypes.node,
}
