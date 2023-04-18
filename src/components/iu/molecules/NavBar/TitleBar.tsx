import { FC } from 'react'

interface indexProps {
    moduleName?: string
    companyName?: string
}

const TitleBar: FC<indexProps> = ({ moduleName = 'Module name', companyName = 'ACME' }) => {

    return (
        <div className='flex flex-row flex-grow'>
            <div className="hidden lg:block flex-0 ">{moduleName}</div>
            <div className="text-center lg:flex-1 lg:block">{!!companyName && 'Company '}{companyName}</div>
        </div>
    )
}

export default TitleBar