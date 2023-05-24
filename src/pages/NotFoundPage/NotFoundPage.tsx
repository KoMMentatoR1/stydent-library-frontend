import { Box } from '@mui/material'
import { brown } from '@mui/material/colors'
import { Background } from '../../components/Auth/AuthPageLayout/style/style'
import { CustomAppBar } from '../../components/CustomAppBar'
import { AuthButton } from '../../components/Auth/AuthButtonContainer'
import { useNavigate } from 'react-router-dom'

export const NotFoundPage = () => {
  const navigator = useNavigate()

  return (
    <Background>
      <CustomAppBar />
      <Box
        sx={{
          width: '70%',
        }}
      >
        <Box
          sx={{
            fontSize: '72px',
            color: brown[700],
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100%',
          }}
        >
          Страница не найдена
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            mt: '20px',
          }}
        >
          <AuthButton
            size='large'
            sx={{ color: 'white' }}
            onClick={() => navigator(-1)}
          >
            Вернуться назад
          </AuthButton>
        </Box>
      </Box>
    </Background>
  )
}
