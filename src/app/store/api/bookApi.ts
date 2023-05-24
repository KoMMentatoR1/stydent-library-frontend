import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_URL } from '../../../shared/http'
import {
  AddBook,
  Book,
  SearchBook,
  SearchBookCount,
} from '../../../shared/types/book'

export const bookApi = createApi({
  reducerPath: 'bookApi',
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
  tagTypes: ['Book'],
  endpoints: build => ({
    getBook: build.query<Book, string>({
      query: id => ({
        url: `/book/${id}`,
      }),
      providesTags: ['Book'],
    }),
    getUserBook: build.mutation<Book, { book_id: string; email: string }>({
      query: data => ({
        url: `/book/getUser/${data.book_id}`,
        method: 'POST',
        body: { email: data.email },
        invalidatesTags: ['Book'],
      }),
    }),
    takeUserBook: build.mutation<Book, { book_id: string; user_id: string }>({
      query: data => ({
        url: `/book/deleteUser/${data.book_id}`,
        method: 'POST',
        body: { user_id: data.user_id },
        invalidatesTags: ['Book'],
      }),
    }),
    getBooks: build.query<Book[], SearchBook>({
      query: data => ({
        url: `/books/${data.page}`,
        params: {
          author: data.author,
          category: data.category,
          title: data.title,
        },
        providesTags: ['Book'],
      }),
    }),
    getBooksCount: build.query<number, SearchBookCount>({
      query: data => ({
        url: `/booksCount`,
        params: {
          author: data.author,
          category: data.category,
          title: data.title,
        },
        providesTags: ['Book'],
      }),
    }),
    createBook: build.mutation<boolean, AddBook>({
      query: data => ({
        url: `/book`,
        method: 'POST',
        body: { ...data },
      }),
      invalidatesTags: ['Book'],
    }),
    userBooks: build.query<Book[], string>({
      query: id => ({
        url: `/book/user/${id}`,
      }),
      providesTags: ['Book'],
    }),
  }),
})
