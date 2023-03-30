import { FC } from 'react'
import TitleBar from './TitleBar'

interface indexProps {

}

const NavBar: FC<indexProps> = ({ }) => {
    //  User Rigths
    // TODO: Build Auth setup that include user role and autorizations
    // const session = useSession()


    return <div className='flex justify-end w-auto'>
        <TitleBar moduleName='module' />
        <div className='flex-0 lfet-auto'>NAVBAR</div>
    </div>
}

export default NavBar