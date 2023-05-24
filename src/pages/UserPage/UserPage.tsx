import React from 'react'
import { Background } from '../../components/Auth/AuthPageLayout/style/style'
import { MainPageLayout } from '../../components/Layouts/MainPageLayout/ui/MainPageLayout'
import { CustomAppBar } from '../../components/CustomAppBar'
import { Box, Button, Typography } from '@mui/material'
import { brown, grey } from '@mui/material/colors'
import { bookApi } from '../../app/store/api/bookApi'
import { useNavigate, useParams } from 'react-router-dom'

const UserPage = () => {
  const params = useParams()
  const { data: books } = bookApi.useUserBooksQuery(params.id || '')
  const [takeBook, {}] = bookApi.useTakeUserBookMutation()
  const navigator = useNavigate()

  return (
    <Background>
      <CustomAppBar />
      <MainPageLayout>
        <Typography variant='h4' sx={{ color: grey[200], textAlign: 'center' }}>
          Книги пользователя
        </Typography>
        {books?.length ? (
          books.map(book => (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px',
                height: '61.75px',
                bgcolor: brown[700],
                borderRadius: '2px',
                transition: 'background .1s linear, box-shadow .1s linear',
                '&:hover': {
                  bgcolor: brown[800],
                  boxShadow: '0px 0px 2px 2px rgba(0, 0, 0, 0.3)',
                  cursor: 'pointer',
                },
              }}
            >
              <Box
                sx={{
                  color: grey[300],
                  fontSize: '22px',
                  display: 'flex',
                  alignItems: 'center',
                  maxWidth: '80%',
                }}
              >
                {book.title}
              </Box>
              <Button
                sx={{ color: grey[300], fontSize: '17px' }}
                variant='text'
                onClick={() =>
                  takeBook({ book_id: book._id, user_id: params.id || '' })
                }
              >
                Забрать книгу
              </Button>
            </Box>
          ))
        ) : (
          <Typography
            variant='h4'
            sx={{ textAlign: 'center', color: grey[300] }}
          >
            Пользователь не брал книги
          </Typography>
        )}
      </MainPageLayout>
    </Background>
  )
}

export default UserPage
