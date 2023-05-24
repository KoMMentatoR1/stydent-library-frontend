import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { AuthButton } from '../../components/Auth/AuthButtonContainer'
import {
  AuthPageLayout,
  FormContainer,
} from '../../components/Auth/AuthPageLayout'
import { BaseInputPassword } from '../../components/base/base-input-password'
import { BaseInputText } from '../../components/base/base-Input-text'
import { useAction } from '../../shared/hooks/useAction'
import { Alert } from '@mui/material'
import { useTypeSelector } from '../../shared/hooks/useTypeSelector'
import { useEffect } from 'react'
import { CustomAppBar } from '../../components/CustomAppBar'

const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>()

  const { login, clearUser } = useAction()
  const { error } = useTypeSelector(state => state.auth)

  const onSubmit: SubmitHandler<FieldValues> = data =>
    login(data.email, data.password)

  useEffect(() => {
    clearUser()
  }, [])

  return (
    <div>
      <CustomAppBar />
      <AuthPageLayout title='BookScout' subTitle='Вход'>
        <FormContainer>
          <BaseInputText
            rules={{
              required: 'Почта обязательное поле',
            }}
            required
            error={errors.email ? true : false}
            label='Почта'
            name='email'
            helperText={errors.email?.message as string}
            control={control}
          />
          <BaseInputPassword
            required
            error={errors.password ? true : false}
            label='Пароль'
            name='password'
            helperText={errors.password?.message as string}
            control={control}
            rules={{
              required: 'Пароль обязателен',
            }}
          />
          {error && <Alert severity='error'>{error}</Alert>}
          <AuthButton
            onClick={handleSubmit(onSubmit)}
            fullWidth
            color='success'
            variant='contained'
          >
            Войти
          </AuthButton>
        </FormContainer>
      </AuthPageLayout>
    </div>
  )
}

export default LoginPage
