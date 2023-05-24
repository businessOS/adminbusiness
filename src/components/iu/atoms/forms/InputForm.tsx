import * as React from 'react'

import { cn } from '@/lib/utils'
import { KeyboardEventHandler } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name: string;
    error?: string;
    validateAs?: 'text' | 'number' | 'decimal' | 'email' | 'date' | 'tel';
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

function getPattern(type: string) {
    let retVal: string | undefined = undefined;

    switch (type) {
        case 'email':
            retVal = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'
            break;
        case 'number':
            retVal = '/^([+-]?[1-9]\d*|0)$/'
            break;
        case 'decimal':
            retVal = '/^\d{1,5}$|(?=^.{1,5}$)^\d+\.\d{0,2}$/'
            break;
        case 'tel':
            retVal = '/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/'
            break;
        case 'date':
            retVal = '/^\d{2}\/\d{2}\/\d{4}$/' /** date with format DD/MM/YYY */
            break;
        case 'time':
            retVal = '/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/' /** time with format HH:MM 24-hour format, optional leading 0*/
    }
    return retVal
}

const InputForm = React.forwardRef<HTMLInputElement, InputProps>(
    ({ validateAs, label, name, error, className, onChange, ...props }, ref) => {

        return (
            <div className="flex flex-col flex-1 min-w-[150px] md:min-w-[250px] lg:min-w-[250px]  mx-2">
                <label className='mb-2 text-xs md:text-sm' htmlFor={name}>{label ?? name}</label>
                <input
                    type={validateAs ?? 'text'}
                    name={name}
                    id={name}
                    required={props.required}
                    pattern={getPattern(validateAs ?? 'text')}
                    className={cn(
                        'peer flex h-8 md:h-9 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-xs md:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
                        'peer-invalid:outline-none peer-invalid:ring-2 peer-invalid:ring-red-400 invalid:ring-offset-2',
                        className
                    )}
                    ref={ref}
                    placeholder={props.placeholder ?? ' '}
                    onChange={onChange}
                    {...props}
                />
                <span className="invisible font-extralight text-[0.70rem] text-slate-400 dark:text-slate-600 peer-invalid:visible mt-2 mb-4">
                    * {error ?? 'Please indicate the value for ' + label}
                </span>
            </div>
        )
    }
)
InputForm.displayName = 'InputForm'

export { InputForm }
