import './App.css'
import { useAction } from '../shared/hooks/useAction'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import { useEffect } from 'react'

export const App = () => {
  const { cheackAuth } = useAction()

  useEffect(() => {
    if (localStorage.getItem('token')) cheackAuth()
  }, [])

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
