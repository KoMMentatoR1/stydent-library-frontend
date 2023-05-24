import React from 'react'
import { Background } from '../../components/Auth/AuthPageLayout/style/style'
import { CustomAppBar } from '../../components/CustomAppBar'
import { Box } from '@mui/material'
import { brown } from '@mui/material/colors'

export const MainPage = () => {
  return (
    <Background>
      <CustomAppBar />
      <Box
        sx={{
          fontSize: '72px',
          color: brown[700],
          fontWeight: 'bold',
          textAlign: 'center',
          width: '50%',
        }}
      >
        Добро пожаловать на сайт
      </Box>
    </Background>
  )
}
