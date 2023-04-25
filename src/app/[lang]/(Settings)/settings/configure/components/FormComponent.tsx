'use client'
import { FC, ReactNode, useEffect, useState } from 'react'
import { useConfigureStore } from '@/components/store/configureStore'
import { configureASteps } from '../assets/steps'
import ProfileForm from './ProfileForm'
import RoleForm from './RoleForm'

interface FormComponentProps {
    children?: ReactNode
}

const FormComponent: FC<FormComponentProps> = ({ children }) => {
    const store = useConfigureStore()

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const newData = new FormData(event.currentTarget)
        const payLoad = Object.fromEntries(newData)
    }

    console.log(`role: ${store.role}`)
    console.log(`page: ${store.pageNumber}`)

    return <form onSubmit={handleOnSubmit}>
        {store.pageNumber === 0 && <RoleForm aSteps={configureASteps} />}
        {store.pageNumber === 1 && <ProfileForm />}
    </form>
}

export default FormComponent
