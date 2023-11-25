import {GuestGuard} from '../components/authentication/guest-guard';

export const withGuestGuard = (Component: any) => (props: any) => (
  <GuestGuard>
    <Component {...props} />
  </GuestGuard>
);
