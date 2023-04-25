'use client'
import { Card } from '@/components/iu/atoms/card'
import { cn } from '@/lib/utils'
import { Button } from '@/ui/atoms/Button'
import { FC } from 'react'

import { useConfigureStore } from '@/components/store/configureStore'

interface NavButtomsProps {
}

const NavButtoms: FC<NavButtomsProps> = ({ }) => {
    const store = useConfigureStore()

    const onBackClick = () => {
        useConfigureStore.setState((state) => ({ pageNumber: state.pageNumber - 1 }))
    }
    const onForwardClick = () => {
        const totalPages = store.pagelength
        const pageNumber = store.pageNumber
        const nextPage = pageNumber < totalPages ? pageNumber + 1 : pageNumber

        console.log(`page: ${pageNumber} total Pag: ${totalPages} next page: ${nextPage}`)
        useConfigureStore.setState((state) => ({ pageNumber: nextPage }))
    }

    return (
        <Card className='flex-1'>
            <Card.Content className={cn('mt-4')}>
                <div className="flex justify-start flex-grow mx-auto md:justify-end md:m-4 ">
                    <Button className="flex-1 mr-4 " disabled={store.pageNumber === 0} size='sm' onClick={onBackClick}>Back</Button>
                    <Button className="flex-1 ml-4 " size='sm' onClick={onForwardClick}>Next</Button>
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