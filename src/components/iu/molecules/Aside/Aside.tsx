
import { FC, ReactNode } from 'react'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/auth';

import ActiveLink from './ActiveLink';
import Icons from '@/ui/molecules/Icons'
import { type LucideIcon } from 'lucide-react';
import LogoCard from './LogoCard';

interface MenusProps extends Partial<React.SVGProps<SVGSVGElement>> {
    name: string,
    root: string,
    icon: keyof typeof Icons
}

const Menus: MenusProps[] = [
    { name: "Home", root: '/', icon: 'Home' },
    { name: "Stock", root: '/stock', icon: 'Boxes' },
    { name: "Purchase", root: '/purchases', icon: 'ShoppingBag' },
    { name: "Sales", root: '/sales', icon: 'CreditCard' },
    { name: "Settings", root: '/settings', icon: 'Settings' },
];

interface AsideProps {
    children?: ReactNode
    lang: string
}

const Aside: FC<AsideProps> = ({ children, lang, }) => {
    return (
        <aside className='flex sm:flex-col w-auto md:w-[200px] lg:w-[250px]  md:h-min-h-[620px]  py-6 bg-light-aside dark:bg-dark-aside z-10 rounded-bl-xl rounded-br-xl md:rounded-none md:rounded-s-xl'>
            <LogoCard />
            <nav className='flex-shrink flex-grow-0 flex w-[95%] h-[85%] m-auto flex-row align-middle justify-around md:justify-stretch  gap-4 md:flex-col md:top-auto md:h-min-[620px] border-1'>
                {Menus.map((item: MenusProps) =>
                    (<ActiveLink key={`aside-btn-${item.name}`} name={item.name} root={lang ? `/${lang}${item.root}` : item.root} iconName={item.icon} />)
                )}
            </nav>
            {children}
        </aside>
    )
}

export default Aside
