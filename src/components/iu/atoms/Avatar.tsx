/* eslint-disable @next/next/no-img-element */
import * as HoverCard from '@radix-ui/react-hover-card';
import { FC, ReactNode } from 'react';
import Link from 'next/link'

interface hoverProps {
    href?: string
    imageUrl?: string | null
    children: ReactNode
}
const Avatar: FC<hoverProps> = ({ href, imageUrl, children }) => (
    <HoverCard.Root>
        <HoverCard.Trigger asChild>
            {href ?
                (<Link
                    className="md:w-[64px] md:h-[64px]  cursor-pointer rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:shadow-[0_0_0_2px_white]"
                    href={{ pathname: href }}
                    rel="noreferrer noopener"
                >

                    <img
                        className="inline-block w-full h-full rounded-full cursor-pointer"
                        src={imageUrl || ''}
                        alt="avatar"
                    />
                </Link>)
                :
                (<img
                    className="inline-block w-full h-full rounded-full"
                    src={imageUrl || ''}
                    alt="avatar"
                />)
            }
        </HoverCard.Trigger>
        <HoverCard.Portal>
            <HoverCard.Content
                className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all z-20"
                sideOffset={1}
            >
                {children}

                <HoverCard.Arrow className="fill-white" />
            </HoverCard.Content>
        </HoverCard.Portal>
    </HoverCard.Root>
);

export default Avatar;