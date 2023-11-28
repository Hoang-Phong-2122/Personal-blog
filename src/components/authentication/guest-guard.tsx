import type { FC, ReactNode } from 'react'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useAuth } from '../../hooks/use-auth'
import { useNavigate } from 'react-router'

interface GuestGuardProps {
   children: ReactNode
}

export const GuestGuard: FC<GuestGuardProps> = (props) => {
   const { children } = props
   const auth = useAuth()
   const navigate = useNavigate()
   const [checked, setChecked] = useState(false)
   const disableGuard = 'true' as string

   useEffect(
      () => {
         // You should remove the "disableGuard" check, because it's meant to be used only in the demo.
         if (auth.isAuthenticated && disableGuard !== 'true') {
            navigate('/')
         } else {
            setChecked(true)
         }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
   )

   if (!checked) {
      return null
   }

   // If got here, it means that the redirect did not occur, and that tells us that the user is
   // not authenticated / authorized.

   return <>{children}</>
}

GuestGuard.propTypes = {
   children: PropTypes.node,
}
