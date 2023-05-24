import axios, { AxiosResponse } from 'axios'
import $api, { API_URL } from '../../../shared/http'
import { IAuthUser } from '../../../shared/types/user'
export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthUser>> {
    return axios.post<IAuthUser>(`${API_URL}/login`, {
      email,
      password,
    })
  }

  static async refresh(): Promise<AxiosResponse<IAuthUser>> {
    return await $api.get<IAuthUser>(`/refresh`, { withCredentials: true })
  }
}
