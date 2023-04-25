'use client'
import { FC, ReactNode } from 'react'
import { useConfigureStore as store } from '@/components/store/configureStore'

interface FormComponentProps {
    children: ReactNode
}

const FormComponent: FC<FormComponentProps> = ({ children }) => {

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const newData = new FormData(event.currentTarget)
        const payLoad = Object.fromEntries(newData)

    }
    return <form onSubmit={handleOnSubmit}>{children}</form>
}

export default FormComponent