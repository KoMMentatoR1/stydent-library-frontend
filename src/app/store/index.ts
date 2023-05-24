import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import { authSlice } from './slices/authSlice'
import { bookApi } from './api/bookApi'
import { authorsApi } from './api/authorsApi'
import { categoriesApi } from './api/categoriesApi'
import { userApi } from './api/userApi'

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  [bookApi.reducerPath]: bookApi.reducer,
  [authorsApi.reducerPath]: authorsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: etDefaultMiddleware =>
      getDefaultMiddleware().concat(
        bookApi.middleware,
        authorsApi.middleware,
        categoriesApi.middleware,
        userApi.middleware
      ),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
