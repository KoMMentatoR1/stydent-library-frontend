import React, { useEffect } from 'react'
import { Background } from '../../components/Auth/AuthPageLayout/style/style'
import { MainPageLayout } from '../../components/Layouts/MainPageLayout/ui/MainPageLayout'
import { CustomAppBar } from '../../components/CustomAppBar'
import { userApi } from '../../app/store/api/userApi'
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const UsersPage = () => {
  const { data: users, refetch } = userApi.useGetUsersQuery()
  const navigator = useNavigate()
  const columns = ['id', 'firstName', 'lastName', 'email', 'phoneNumber']

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  useEffect(() => {
    refetch()
  }, [])

  return (
    <Background>
      <CustomAppBar />
      <MainPageLayout>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell key={column} align='center'>
                      {column}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {users
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user, index) => {
                    return (
                      <TableRow
                        onClick={() => navigator(`/user/${user._id}`)}
                        hover
                        role='checkbox'
                        tabIndex={-1}
                        key={index}
                      >
                        <TableCell align='center'>{user._id}</TableCell>
                        <TableCell align='center'>{user.email}</TableCell>
                        <TableCell align='center'>{user.firstName}</TableCell>
                        <TableCell align='center'>{user.lastName}</TableCell>
                        <TableCell align='center'>{user.phoneNumber}</TableCell>
                      </TableRow>
                    )
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10]}
            component='div'
            count={users?.length || 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </MainPageLayout>
    </Background>
  )
}

export default UsersPage
