import {Box, CircularProgress} from '@mui/material';

export const SplashScreen = () => (
  <Box
    sx={{
      alignItems: 'center',
      backgroundColor: 'neutral.900',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'center',
      left: 0,
      p: 3,
      position: 'fixed',
      top: 0,
      width: '100vw',
      zIndex: 2000
    }}
  >
      <Box
          sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 3
          }}
      >
          <CircularProgress />
      </Box>
  </Box>
);
