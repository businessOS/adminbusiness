/* eslint-disable @next/next/no-img-element */
'use client'
import { cn } from '@/lib/utils'
import { ChangeEventHandler, FC } from 'react'
import { Card } from './card'

import { type UseBoundStore } from 'zustand/react'
import { type StoreApi } from 'zustand'


interface RadioCardsProps {
    title?: string
    description?: string
    name: string
    value?: string
    buttoms: IRadioButoms[]
    className?: string
}

const RadioCards: FC<RadioCardsProps> = ({ title, description, name, value, buttoms, className }) => {
    return (
        <Card className={cn('border-0 md:border-2 mb-4 md:mb-0')}>
            {title &&
                <Card.Header>
                    <Card.Title>{title}</Card.Title>
                    {!!description && <Card.Description className='hidden md:inline-block'>{description}</Card.Description>}
                </Card.Header>
            }
            <Card.Content>
                <div className={cn(`flex flex-wrap justify-start gap-4 md:gap-6 lg:gap-8 mt-4`, className)} >
                    {buttoms.map((item, index) => (
                        <div className="relative flex-grow  min-w-[130px] md:min-w-[180px] md:max-w-[240px] lg:min-w-[240px] lg:max-w-[280px] justify " key={`radio=${item.title}-${index}`} >
                            <input tabIndex={0} type="radio" name={name} id={item.id} value={value} className="absolute opacity-0 focus:outline-1 focus:outline-light-aside focus:dark:outline-dark-aside peer" />
                            <label htmlFor={item.id} className="tabular-nums tabindex-0 flex items-center h-[70px] md:h-[90px] lg:max-h-[120px] gap-4 p-4 transition shadow-md cursor-pointer dark:shadow-gray-950 rounded-md md:rounded-xl bg-opacity-750 backdrop-blur-2xl bg-light-main dark:bg-dark-main hover:bg-opacity-75 peer-checked:ring-2 peer-checked:ring-gray-400 peer-checked:dark:ring-gray-500 peer-checked:bg-light-aside peer-checked:dark:bg-dark-aside peer-focus:outline-0 peer-focus:outline-light-aside peer-focus:dark:outline-dark-aside">

                            </label>
                            {/** We must put this code outside of the label component becouse is nedded change the icon background when the user select the radio buttom */}
                            <div className="absolute cursor-not-allowed top-0 left-4 md:left-5 mt-[20px] md:my-[29px]  inline-flex items-center justify-center flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-md md:rounded-lg text-light-text-main-color dark:text-dark-text-main-color peer-checked:text-dark-text-main-color peer-checked:bg-light-primary peer-checked:dark:bg-dark-primary">
                                {item.icon}
                            </div>
                            <div className='flex flex-col h-10 absolute top-0 left-14 md:left-[5rem] mt-[16px] md:my-[25px] '>
                                <h6 className="my-auto text-xs cursor-not-allowed select-none md:text-base">{item.title}</h6>
                                {!!item.description && <span className="hidden text-xs select-none md:block opacity-60">{item.description}</span>}
                            </div>
                            <div className="flex absolute top-0 right-[-6px] bottom-0 w-7 h-7 my-[-6px] rounded-full bg-light-primary dark:bg-dark-primary  scale-0 peer-checked:scale-100 transition delay-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 mx-auto my-auto text-white " viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                </svg>
                            </div>
                        </div>
                    ))}
                    <p className="hidden mt-2 text-sm text-pink-600 peer-invalid:block">
                        Please select one {name}.
                    </p>
                </div>
            </Card.Content>
        </Card>
    )
}

export default RadioCards