import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useTypeSelector } from '../../shared/hooks/useTypeSelector'
import { MainPage } from '../../pages/MainPage/MainPage'
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage'
import { AccessControl } from './AccessControl'
import { ERole } from '../../shared/types/user'
import LoginPage from '../../pages/LoginPage/LoginPage'
import { AddBookPage } from '../../pages/AddBookPage/AddBookPage'
import UsersPage from '../../pages/UsersPage/UsersPage'
import CreateUserPage from '../../pages/CreateUserPage/CreateUserPage'
import { useEffect } from 'react'
import BooksPage from '../../pages/BooksPage/BooksPage'
import BookPage from '../../pages/BookPage/BookPage'
import UserPage from '../../pages/UserPage/UserPage'

const AppRouter = () => {
  const { user } = useTypeSelector(state => state.auth)
  const navigator = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (user.token && location.pathname === '/login') navigator('/users')
  }, [user.token])

  return (
    <Routes>
      <Route path='/' element={<MainPage />} key='/' />
      <Route
        path='/login'
        element={
          <AccessControl canGo={[ERole.NOTAUTH]}>
            <LoginPage />
          </AccessControl>
        }
        key='/login'
      />
      <Route
        path='/addBook'
        element={
          <AccessControl canGo={[ERole.ADMIN]}>
            <AddBookPage />
          </AccessControl>
        }
        key='/addBook'
      />
      <Route
        path='/books/:page'
        element={
          <AccessControl canGo={[ERole.ADMIN]}>
            <BooksPage />
          </AccessControl>
        }
        key='/books/:page'
      />
      <Route
        path='/book/:id'
        element={
          <AccessControl canGo={[ERole.ADMIN]}>
            <BookPage />
          </AccessControl>
        }
        key='/book/:id'
      />
      <Route
        path='/createUserPage'
        element={
          <AccessControl canGo={[ERole.ADMIN]}>
            <CreateUserPage />
          </AccessControl>
        }
        key='/createUserPage'
      />
      <Route
        path='/users'
        element={
          <AccessControl canGo={[ERole.ADMIN]}>
            <UsersPage />
          </AccessControl>
        }
        key='/users'
      />
      <Route
        path='/user/:id'
        element={
          <AccessControl canGo={[ERole.ADMIN]}>
            <UserPage />
          </AccessControl>
        }
        key='/user/:id'
      />
      <Route path='*' element={<NotFoundPage />} key='/notfound' />
    </Routes>
  )
}

export default AppRouter
