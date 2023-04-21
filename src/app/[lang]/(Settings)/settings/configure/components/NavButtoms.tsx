import { Card } from '@/components/iu/atoms/card'
import { cn } from '@/lib/utils'
import { Button } from '@/ui/atoms/Button'
import { FC } from 'react'

interface NavButtomsProps {

}

const NavButtoms: FC<NavButtomsProps> = ({ }) => {

    return (
        <Card className='flex-1'>
            <Card.Content className={cn('mt-4')}>
                <div className="flex flex-grow justify-start md:justify-end  mx-auto md:m-4 ">
                    <Button className="mr-4 flex-1 " size='sm'>Back</Button>
                    <Button className="ml-4 flex-1 " size='sm'>Next</Button>
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