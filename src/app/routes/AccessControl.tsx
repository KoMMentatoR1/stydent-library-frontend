import React, { FC } from 'react'
import { ERole } from '../../shared/types/user'
import { useTypeSelector } from '../../shared/hooks/useTypeSelector'
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage'

interface AccessControlProps {
  canGo: ERole[]
  children: React.ReactNode
}

export const AccessControl: FC<AccessControlProps> = ({ canGo, children }) => {
  const { user } = useTypeSelector(state => state.auth)
  if (
    (canGo.includes(ERole.ADMIN) && user.token) ||
    (canGo.includes(ERole.NOTAUTH) && !user.token)
  ) {
    return <div>{children}</div>
  } else {
    return <NotFoundPage />
  }
}
