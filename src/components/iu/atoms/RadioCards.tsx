/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils'
import { FC } from 'react'

interface RadioCardsProps {
    name: string
    buttoms: IRadioButoms[]
    className?: string
}

const RadioCards: FC<RadioCardsProps> = ({ name, buttoms, className }) => {

    return (
        <div className={cn(`flex flex-wrap justify-start gap-4 md:gap-6 lg:gap-8`, className)} >
            {buttoms.map((item, index) => (
                <div className="relative min-w-[130px] md:min-w-[190px] lg:min-w-[210px] justify " key={`radio=${item.title}-${index}`} >
                    <input type="radio" name={name} id={item.id} className="hidden peer" />
                    <label htmlFor={item.id} className="flex items-center h-[70px] md:h-[110px] lg:max-h-[130px] gap-4 p-4 transition shadow-md cursor-pointer dark:shadow-gray-950 rounded-md md:rounded-xl bg-opacity-750 backdrop-blur-2xl bg-light-main dark:bg-dark-main hover:bg-opacity-75 peer-checked:border-2 peer-checked:border-light-primary peer-checked:dark:border-dark-text-secondary-color peer-checked:bg-light-aside peer-checked:dark:bg-dark-aside">

                    </label>
                    {/** We must put this code outside of the label component becouse is nedded change the icon background when the user select the radio buttom */}
                    <div className="absolute cursor-not-allowed top-0 left-4 md:left-5 mt-[18px] md:my-[39px] inline-flex items-center justify-center flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-md md:rounded-lg text-light-text-main-color dark:text-dark-text-main-color peer-checked:text-dark-text-main-color peer-checked:bg-light-primary peer-checked:dark:bg-dark-primary">
                        {item.icon}
                    </div>
                    <div className='inline-flex absolute top-0 left-14 md:left-[5rem] mt-[24px] md:my-[46px] cursor-not-allowed'>
                        <h6 className="text-xs md:text-base">{item.title}</h6>
                        <span className="hidden text-sm md:block opacity-60">{item.description}</span>
                    </div>
                    <div className="flex absolute top-0 right-[-6px] bottom-0 w-7 h-7 my-[-6px] rounded-full bg-light-primary dark:bg-dark-primary  scale-0 peer-checked:scale-100 transition delay-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 mx-auto my-auto text-white " viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg>
                    </div>
                </div>
            ))}
            <p className="invisible mt-2 text-sm text-pink-600 peer-invalid:visible">
                Please select one {name}.
            </p>
        </div>
    )
}

export default RadioCards