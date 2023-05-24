import styled from '@emotion/styled'
import { AppBar, Box, List } from '@mui/material'
import { green, grey } from '@mui/material/colors'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import { Link } from 'react-router-dom'

export const CastomAppBar = styled(AppBar)`
  position: fixed;
  background-color: ${green[800]};
`

export const Logo = styled(Box)`
  text-transform: uppercase;
  font-family: roboto;
  font-weight: 700;
  font-size: 25px;
  letter-spacing: 4px;
  color: ${grey[300]};
`

export const ButtonList = styled(List)`
  display: flex;
  gap: '30px';
  justify-content: 'flex-end';
`

export const NavLink = styled(Link)`
  color: ${grey[300]};
  font-size: 19px;
  text-align: center;
  text-decoration: none;
  transition: color 0.1s linear;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
    color: ${grey[500]};
  }
`
