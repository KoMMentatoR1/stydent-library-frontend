export interface IReqUser {
  password: string
  email: string
}

export interface IAuthUser {
  token: string
  user: {
    id: number
    role: ERole
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
  }
}

export interface IUser {
  _id: number
  role: ERole
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  password: string
}

export interface ICreateUser {
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
}

export interface IUserAdmin {
  id: number
  role: string
}

export interface IUserAdminUpdate {
  id: number
  role: string
}

export enum ERole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  NOTAUTH = 'NOTAUTH',
}
