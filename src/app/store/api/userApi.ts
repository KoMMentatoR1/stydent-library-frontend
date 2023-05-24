import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_URL } from '../../../shared/http'
import { ICreateUser, IUser } from '../../../shared/types/user'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
    prepareHeaders: headers => {
      const token = localStorage.getItem('token')

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),
  endpoints: build => ({
    getUsers: build.query<IUser[], void>({
      query: () => ({
        url: `/user/allUsersData`,
      }),
    }),
    createUser: build.mutation<IUser, ICreateUser>({
      query: data => ({
        url: `/user/create`,
        method: 'POST',
        body: { ...data },
      }),
    }),
    getUserBook: build.query<IUser, string>({
      query: id => ({
        url: `/user/${id}/book`,
      }),
    }),
  }),
})
