import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name: string;
    error?: string;
    validateAs: 'text' | 'number' | 'decimal' | 'email' | 'date' | 'tel';
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
    ({ validateAs, label, name, error, className, ...props }, ref) => {
        return (
            <div className="flex flex-col">
                <label htmlFor={name}>{label ?? name}</label>
                <input
                    type={validateAs ?? 'text'}
                    name={name}
                    id={name}
                    required={props.required}
                    pattern={getPattern(validateAs)}
                    className={cn(
                        'peer flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
                        'placeholder-shown:peer-invalid:border-2 placeholder-shown:peer-invalid:text-red-700 placeholder-shown:peer-invalid:border-red-700',
                        className
                    )}
                    ref={ref}
                    placeholder={props.placeholder ?? ' '}
                    {...props}
                />
                <p className="invisible font-light text-red-700 peer-invalid:visible">
                    {error ?? 'Please indicate the value for ' + label}
                </p>
            </div>
        )
    }
)
InputForm.displayName = 'InputForm'

export { InputForm }
