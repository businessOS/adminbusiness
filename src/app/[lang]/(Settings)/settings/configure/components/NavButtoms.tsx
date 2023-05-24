'use client'
import { Card } from '@/components/iu/atoms/card'
import { cn } from '@/lib/utils'
import { Button } from '@/ui/atoms/Button'
import { FC, useEffect, useState } from 'react'

import { useConfigureStore } from '@/components/store/configureStore'
import Paragraph from '@/components/iu/atoms/Paragraph'

interface NavButtomsProps {
    validate: () => boolean
}

const NavButtoms: FC<NavButtomsProps> = ({ validate }) => {
    const [hasAnError, setError] = useState(false)
    const store = useConfigureStore()
    const updateStep = store.updateStep

    useEffect(() => {
        const isValid = validate()

    }, [validate])

    const onBackClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (updateStep) {
            const isDisable = store.steps[store.pageNumber - 1].state === 'disable'
            const addStep = isDisable ? 2 : 1
            let stepPos = store.pageNumber - addStep
            if (stepPos < 0)
                stepPos = 0

            if (stepPos !== store.pageNumber)
                updateStep(store.steps[store.pageNumber].title, 'default')

            useConfigureStore.setState((state) => ({ pageNumber: stepPos }))
            updateStep(store.steps[store.pageNumber - 1].title, 'focus')
        }
    }

    const onForwardClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        const isValid = validate()
        setError(isValid === false)

        if (isValid) {
            const totalPages = store.pagelength
            const pageNumber = store.pageNumber

            // Verify is next step is disabled
            const isDisable = store.steps[store.pageNumber + 1].state === 'disable'
            const addStep = isDisable ? 2 : 1
            console.log(`isDisable: ${isDisable}`)
            let stepPos = store.pageNumber + addStep
            if (stepPos === store.steps.length)
                stepPos = store.steps.length - 1


            if (updateStep) {
                if (stepPos !== store.pageNumber)
                    updateStep(store.steps[store.pageNumber].title, 'complete')
                // console.log(`total Pag: ${totalPages} current page: ${pageNumber} next page: ${nextPage}`)
                useConfigureStore.setState((state) => ({ pageNumber: stepPos }))
                updateStep(store.steps[stepPos].title, 'focus')
            }
        }
    }

    return (
        <Card className='flex-1 md:mb-4'>
            <Card.Content className={cn('mt-4')}>
                <div className="flex justify-center flex-grow mx-auto md:justify-end ">
                    {hasAnError &&
                        <>
                            <Paragraph className='hidden md:inline-block animate-bounce' state='error' size='xs'>* Please verify all values</Paragraph>
                            <Paragraph className='inline-block ml-4 md:hidden animate-bounce' state='error' size='sm'>* errors</Paragraph>
                            <div className='flex-grow' />
                        </>
                    }
                    <Button className="flex-grow mr-2 md:mr-4 " type="button" disabled={store.pageNumber === 0} size='sm' onClick={onBackClick}>Back</Button>
                    <Button className="flex-grow ml-2 md:ml-4 " type={store.pageNumber === store.steps.length - 1 ? "submit" : "button"} size='sm' onClick={onForwardClick}>Next</Button>
                </div>
            </Card.Content>
            <Card.Footer className={cn('hidden md:inline-block')}>
                <p>
                    Admin Manager app is a demo app.{" "}
                    <strong>
                        You can test the upgrade and won&apos;t be charged.
                    </strong>
                </p>
                <p>
                    You can find a list of test card numbers on the{" "}
                    <a
                        href="https://stripe.com/docs/testing#cards"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-8"
                    >
                        Stripe docs
                    </a>
                    .
                </p>

            </Card.Footer>
        </Card>
    )
}

export default NavButtoms