'use client'

import { signIn, signOut } from 'next-auth/react'
import { FC, useState } from 'react'
import { Button } from './Button'
import { toast } from './toast'

interface SignOutButtonProps { }

const SignOutButton: FC<SignOutButtonProps> = ({ }) => {
    const [isLoading, setIsLoading] = useState<boolean>()

    const signUserOut = async () => {
        setIsLoading(true)
        try {
            await signOut()
        } catch (error) {
            toast({
                title: 'Error Signing Out',
                message: 'Please try again later',
                type: 'error'
            })
        }
    }
    return <Button onClick={signUserOut}>Sign Out</Button>
}

export default SignOutButton