'use client'
import { useUserStore } from "./userStore"
import { useRef } from "react";

function UserStoreInitializer({
    name,
    username,
    image,
    email,
    role,
    description,
    currentCompany
}: IUserStore) {
    const initialized = useRef(false)

    if (!initialized.current) {
        useUserStore.setState({ name, username, image, email, description, role, currentCompany })
        initialized.current = true
    }
    return null
}

export default UserStoreInitializer