import React from 'react'
import { Background } from '../../components/Auth/AuthPageLayout/style/style'
import { MainPageLayout } from '../../components/Layouts/MainPageLayout/ui/MainPageLayout'
import { CustomAppBar } from '../../components/CustomAppBar'
import { Typography, Box, Alert, Button } from '@mui/material'
import { grey, brown } from '@mui/material/colors'
import { BaseInputText } from '../../components/base/base-Input-text'
import { FieldValues, useForm } from 'react-hook-form'
import { userApi } from '../../app/store/api/userApi'

const CreateUserPage = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const [createUser, { isSuccess, error }] = userApi.useCreateUserMutation()

  const handleCreate = (data: FieldValues) => {
    createUser({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
    })
  }

  return (
    <Background>
      <CustomAppBar />
      <MainPageLayout>
        <Typography variant='h4' sx={{ color: grey[200], textAlign: 'center' }}>
          Добавление пользователя
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            mt: '30px',
            width: '100%',
          }}
        >
          <Box sx={{ width: '100%' }}>
            <BaseInputText
              control={control}
              label='Почта нового человека'
              name='email'
              required
              rules={{ required: 'Почта обязательное поле' }}
              helperText={errors.email?.message as string}
              error={!!errors.email}
            />
          </Box>
          <Box sx={{ width: '100%' }}>
            <BaseInputText
              control={control}
              label='Фамилия пользователя'
              name='firstName'
              required
              rules={{
                required: 'Фамилия пользователя обязательно для заполнения',
              }}
              helperText={errors.firstName?.message as string}
              error={!!errors.firstName}
            />
          </Box>
          <Box sx={{ width: '100%' }}>
            <BaseInputText
              control={control}
              label='Имя пользователя'
              name='lastName'
              required
              rules={{
                required: 'Имя пользователя обязательно для заполнения',
              }}
              helperText={errors.lastName?.message as string}
              error={!!errors.lastName}
            />
          </Box>
          <Box sx={{ width: '100%' }}>
            <BaseInputText
              control={control}
              label='Номер телефона'
              name='phoneNumber'
              required
              rules={{
                required: 'Номер телефона обязательно для заполнения',
              }}
              helperText={errors.phoneNumber?.message as string}
              error={!!errors.phoneNumber}
            />
          </Box>
          {error && (
            <Alert severity='error'>
              Возникла ошибка при создании пользователя
            </Alert>
          )}
          {isSuccess && (
            <Alert severity='success'>Пользователь успешно создан</Alert>
          )}
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
            <Button
              variant='contained'
              size='large'
              sx={{
                bgcolor: brown[700],
                '&:hover': {
                  bgcolor: brown[900],
                },
              }}
              onClick={handleSubmit(handleCreate)}
            >
              Создать
            </Button>
          </Box>
        </Box>
      </MainPageLayout>
    </Background>
  )
}

export default CreateUserPage
