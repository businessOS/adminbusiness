
import { FC } from 'react'
import ActiveLink from './ActiveLink';

import Icons from '@/ui/molecules/Icons'

import { type LucideIcon } from 'lucide-react';
interface MenusProps extends Partial<React.SVGProps<SVGSVGElement>> {
    name: string,
    root: string,
    icon: keyof typeof Icons
}

const Menus: MenusProps[] = [
    { name: "Home", root: '/', icon: 'Home' },
    { name: "Inventary", root: '/inventory', icon: 'Boxes' },
    { name: "Purchase", root: '/purchases', icon: 'ShoppingBag' },
    { name: "Sales", root: '/sales', icon: 'CreditCard' },
    { name: "Settings", root: '/settings', icon: 'Settings' },
];

const LogoCard = () => {
    return (
        <div className='hidden w-full text-center flex-0 md:block'>Logo</div>
    )
}

interface indexProps {

}

const Aside: FC<indexProps> = ({ }) => {
    return (
        <aside className='flex sm:flex-col w-auto md:w-[200px] lg:w-[250px]  md:h-min-h-[620px]  py-6 bg-light-aside dark:bg-dark-aside z-10 rounded-bl-xl rounded-br-xl md:rounded-none md:rounded-s-xl'>
            <LogoCard />
            <nav className='flex-shrink flex-grow-0 flex w-[95%] h-[85%] m-auto flex-row align-middle justify-around  gap-4 md:flex-col md:top-auto md:h-min-[620px] border-1'>
                {Menus.map((item: MenusProps) =>
                    (<ActiveLink key={`aside-btn-${item.name}`} name={item.name} root={item.root} iconName={item.icon} />)
                )}
            </nav>
        </aside >
    )
}

export default Aside