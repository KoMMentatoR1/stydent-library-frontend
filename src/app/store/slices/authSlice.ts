import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ERole, IAuthUser } from '../../../shared/types/user'

export interface UserState {
  user: IAuthUser
  isLoading: boolean
  error: string
  success: boolean
}

const initialState: UserState = {
  user: {
    token: '',
    user: {
      id: 0,
      role: ERole.NOTAUTH,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
    },
  },
  isLoading: false,
  error: '',
  success: false,
}

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userFetching(state) {
      state.isLoading = true
    },
    userFetchingSuccess(state, action: PayloadAction<IAuthUser>) {
      state.isLoading = false
      state.error = ''
      state.user = action.payload
    },
    userFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    userClearError(state) {
      state.error = ''
    },
    userSetSuccess(state, action: PayloadAction<boolean>) {
      state.success = action.payload
    },
    userClear(state) {
      state.error = ''
      state.isLoading = false
      state.success = false
      state.user.token = ''
      state.user.user.id = 0
      state.user.user.email = ''
    },
  },
})
