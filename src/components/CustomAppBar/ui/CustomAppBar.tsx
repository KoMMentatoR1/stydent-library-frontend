import { AppBar, Box, Button, ListItem, Toolbar } from '@mui/material'
import { brown, grey } from '@mui/material/colors'
import { ButtonList, Logo, NavLink } from '../style/style'
import { useNavigate } from 'react-router-dom'
import { useAction } from '../../../shared/hooks/useAction'
import { useTypeSelector } from '../../../shared/hooks/useTypeSelector'

export const CustomAppBar = () => {
  const navigator = useNavigate()
  const { logout } = useAction()
  const { user } = useTypeSelector(state => state.auth)

  return (
    <AppBar>
      <Toolbar sx={{ bgcolor: brown[400] }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ pl: '20px' }}>
            <Logo
              sx={{
                ':hover': {
                  cursor: 'pointer',
                },
              }}
              onClick={() => navigator('/')}
            >
              BOOKSCOUT
            </Logo>
          </Box>
          {user.token ? (
            <ButtonList>
              <ListItem>
                <NavLink to='/createUserPage'>Добавить пользователя</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to='/users'>Пользователи</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to='/addBook'>Добавить книгу</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to='/books/1'>Книги</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to='/' onClick={() => logout()}>
                  Выход
                </NavLink>
              </ListItem>
            </ButtonList>
          ) : (
            <ButtonList>
              <ListItem>
                <NavLink to='/login'>Вход</NavLink>
              </ListItem>
            </ButtonList>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
