import { Background } from '../../components/Auth/AuthPageLayout/style/style'
import { CustomAppBar } from '../../components/CustomAppBar'
import { Alert, Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { bookApi } from '../../app/store/api/bookApi'
import { grey } from '@mui/material/colors'
import { MainPageLayout } from '../../components/Layouts/MainPageLayout/ui/MainPageLayout'
import noPhoto from './../../assets/noPicture.jpg'
import { FieldValues, useForm } from 'react-hook-form'
import { BaseInputText } from '../../components/base/base-Input-text'
import { AuthButton } from '../../components/Auth/AuthButtonContainer'

const BookPage = () => {
  const params = useParams()

  const { data: book, isLoading } = bookApi.useGetBookQuery(params.id || '')
  const [getUserBook, { isSuccess, error }] = bookApi.useGetUserBookMutation()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const getBook = (data: FieldValues) => {
    getUserBook({ book_id: params.id || '', email: data.email })
  }

  return (
    <Background>
      <CustomAppBar />
      <MainPageLayout>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Box
            sx={{
              width: '22%',
              maxWidth: '22%',
              minWidth: '22%',
            }}
          >
            <img
              style={{ width: '100%', height: 'auto', maxHeight: '400px' }}
              src={typeof book?.image === 'string' ? book.image : noPhoto}
            />
          </Box>
          <Box sx={{ width: '100%', color: grey[300], marginLeft: '60px' }}>
            <Box
              sx={{
                margin: 'auto',
                fontSize: '30px',
                width: '100%',
                textAlign: 'center',
                mb: '40px',
              }}
            >
              {book?.title}
            </Box>
            <Box
              sx={{
                margin: 'auto',
                fontSize: '30px',
                width: '100%',
                textAlign: 'left',
                mb: '20px',
              }}
            >
              <Box sx={{ fontWeight: 'bold', mb: '10px' }}>
                Краткое содержание:
              </Box>
              <Box>{book?.description}</Box>
            </Box>
            <Box
              sx={{
                margin: 'auto',
                fontSize: '30px',
                width: '100%',
                textAlign: 'left',
                mb: '20px',
              }}
            >
              <Box sx={{ fontWeight: 'bold', mb: '10px' }}>Авторы:</Box>
              {book?.authors?.[0]
                ? book?.authors.join(', ')
                : 'Автор не определен'}
            </Box>
            <Box
              sx={{
                margin: 'auto',
                fontSize: '30px',
                width: '100%',
                textAlign: 'left',
                mb: '20px',
              }}
            >
              <Box sx={{ fontWeight: 'bold', mb: '10px' }}>Категория:</Box>
              <Box>
                Категория:{' '}
                {book?.categories?.[0]
                  ? book?.categories.join(', ')
                  : 'Категория книг не определена'}
              </Box>
            </Box>
            <Box
              sx={{
                margin: 'auto',
                fontSize: '30px',
                width: '100%',
                textAlign: 'left',
                mb: '20px',
              }}
            >
              <Box sx={{ fontWeight: 'bold', mb: '10px' }}>Пуликация:</Box>
              <Box>
                {' '}
                {typeof book?.publisher === 'string'
                  ? book?.publisher
                  : 'Не известно'}
              </Box>
            </Box>
            <Box
              sx={{
                margin: 'auto',
                fontSize: '30px',
                width: '100%',
                textAlign: 'left',
                mb: '20px',
              }}
            >
              <BaseInputText
                control={control}
                label='Почта кому выдаем книгу'
                name='email'
                required
                rules={{ required: 'Почта не может быть пустой' }}
                error={!!errors.email}
                helperText={errors.email?.message as string}
              />
            </Box>
            {isSuccess && <Alert severity='success'>Книга выдана</Alert>}
            {error && (
              <Alert severity='error'>Возникла ошибка при выдаче книги</Alert>
            )}
            <Box
              sx={{
                margin: 'auto',
                fontSize: '30px',
                width: '100%',
                textAlign: 'left',
                mb: '20px',
              }}
            >
              <AuthButton
                onClick={handleSubmit(getBook)}
                sx={{ color: '#fff' }}
              >
                Выдать
              </AuthButton>
            </Box>
          </Box>
        </Box>
      </MainPageLayout>
    </Background>
  )
}

export default BookPage
