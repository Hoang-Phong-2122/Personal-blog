import { AuthGuard } from '../components/authentication/auth-guard'

export const withAuthGuard = (Component: any) => (props: any) => (
   <AuthGuard>
      <Component {...props} />
   </AuthGuard>
)
