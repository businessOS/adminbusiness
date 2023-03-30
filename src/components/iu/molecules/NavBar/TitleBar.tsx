import { FC } from 'react'

interface indexProps {
    moduleName?: string
    companyName?: string
}

const TitleBar: FC<indexProps> = ({ moduleName, companyName = '' }) => {

    return (
        <div className='flex flex-grow'>
            <div className="hidden lg:block flex-0 ">{moduleName}</div>
            <div className="text-center lg:flex-1 lg:block">{!!companyName && 'Company '}{companyName}</div>
        </div>
    )
}

export default TitleBar