'use client'
import { api } from '@/utils/api'
import { FC, ReactNode } from 'react'

interface layoutProps {
    children: ReactNode
}

const Layout: FC<layoutProps> = ({ children }) => {
    return (<>{children}</>)
}

export default api.withTRPC(Layout)