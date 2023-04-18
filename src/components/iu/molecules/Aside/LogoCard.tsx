import TitleHeading from '../../atoms/TitleHeading'
import LogoAvatar from './LogoAvatar'
import { useUserStore } from "@/components/store/userStore"


const LogoCard = () => {
    const name = useUserStore.getState().name
    const email = useUserStore.getState().email
    const image = useUserStore.getState().image
    const description = useUserStore.getState().description
    const role = useUserStore.getState().role

    return (
        <>
            <div className="justify-around hidden gap-4 mx-4 align-middle md:flex md:flex-1 md:flex-nowrap">
                <LogoAvatar name={name} email={email} image={image} description={description} role={role} />
                <div className="flex flex-col flex-1 space-12">
                    <div className="m-grow flex-0 ">
                        <TitleHeading className='line-clamp-1' size='sm'>{name}</TitleHeading>
                    </div>
                    <div><span className="w-auto px-2 py-1 leading-tight tracking-tighter rounded-md text-dark-text-main-color bg-light-primary dark:bg-dark-primary text-[8.5px]">Company</span></div>
                </div>
            </div>
        </>
    )
}

export default LogoCard