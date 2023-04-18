/* eslint-disable @next/next/no-img-element */
'use client'
import { FC } from 'react'
import { getServerSession } from 'next-auth'
import Avatar from "@/ui/atoms/Avatar"


interface LogoAvatarProps extends IUserStore {
}

const LogoAvatar: FC<LogoAvatarProps> = ({ name, email, image, description, role }) => {

    return (<Avatar href={"/settings"} imageUrl={image} >
        <div className="flex flex-col flex-1 gap-[4px]">
            <img
                className="block h-[60px] w-[60px] rounded-full"
                src={image || ''}
                alt={`Avatar ${name}`}
            />
            <div className="flex flex-col gap-[15px]">
                <div>
                    <div className="text-mauve12 m-0 text-[12px] leading-[1.5]">{name}</div>
                    <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">{email}</div>
                </div>
                <div className="text-mauve12 m-0 text-[15px] leading-[1.5]">
                    {description}
                </div>
                <div className="flex gap-[15px]">
                    <div className="flex gap-[5px]">
                        <div className="bg-light-primary dark:bg-dark-primary text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">{role}</div>
                    </div>
                    <div className="flex gap-[5px]">
                        <div className="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]">0</div>{' '}
                        <div className="text-mauve10 m-0 text-[15px] leading-[1.5]">Companies access</div>
                    </div>
                </div>
            </div>
        </div>
    </Avatar>)
}

export default LogoAvatar