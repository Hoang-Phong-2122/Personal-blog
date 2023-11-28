import React from 'react'
import { theme } from 'antd'
import { Box, Typography } from '@mui/material'

const Index: React.FC = () => {
   const {
      token: { colorBgContainer },
   } = theme.useToken()
   return (
      <Box
         style={{
            height: window.innerHeight + 'px',
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignContent: 'center',
         }}
      >
         <Typography sx={{ fontSize: 38, fontWeight: 700 }}>Đã có lỗi xảy ra</Typography>
      </Box>
   )
}

export default Index
