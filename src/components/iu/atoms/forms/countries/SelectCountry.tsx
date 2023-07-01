import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import Icons from '@/ui/molecules/Icons'

import { COUNTRIES } from '@/ui/atoms/forms/countries/countries'

interface ICountry {
    title: string
    value: string
}

interface ISelectCountry {
    name: string
    label: string
    error?: string;
    required?: boolean
    onChange?(value: {
        title: string;
        value: string;
    }): void
}

export default function SelectCountry({ name, label, error, required, onChange }: ISelectCountry) {
    const [selected, setSelected] = useState<ICountry>(COUNTRIES[0])
    const [query, setQuery] = useState('')

    const filteredPeople =
        query === ''
            ? COUNTRIES
            : COUNTRIES.filter((country: ICountry) =>
                country.title
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    const updateValue = (countrySelected: typeof selected) => {
        setSelected(countrySelected);
        if (onChange)
            onChange(countrySelected);
    }

    const onInput = (newQuery: string) => {
        const selectedCoutry =
            query === ''
                ? COUNTRIES
                : COUNTRIES.filter((country: ICountry) =>
                    country.title
                        .toLowerCase()
                        .replace(/\s+/g, '')
                        .includes(newQuery.toLowerCase().replace(/\s+/g, ''))
                )

        if (filteredPeople.length > 0) {
            const newItem: ICountry = filteredPeople[0]
            updateValue(newItem)
        }
    }



    return (
        <div className="flex flex-col flex-1 min-w-[150px] md:min-w-[250px] lg:min-w-[250px]  mx-2">
            <label className='mb-2 text-xs md:text-sm' htmlFor={name}>{label ?? name}</label>
            <Combobox value={selected} onChange={updateValue} name={name}>
                <div className="relative mt-0">
                    <div className="">
                        <Combobox.Input
                            className="flex w-full h-8 px-3 py-2 text-xs bg-transparent border rounded-md peer md:h-9 border-slate-300 md:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900"
                            displayValue={(country: ICountry) => country.title}
                            onChange={(event) => setQuery(event.target.value)}
                            onInput={(event) => onInput(event.currentTarget.value)}
                            tabIndex={5}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <Icons.ChevronsUpDown
                                className="w-5 h-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base rounded-md shadow-lg max-h-60 bg-light-main dark:bg-dark-main ring-1 ring-black dark:ring-gray-500 ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredPeople.length === 0 && query !== '' ? (
                                <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredPeople.map((country: ICountry) => (
                                    <Combobox.Option
                                        key={country.title}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-light-aside dark:bg-dark-aside text-light-text-main-color dark:text-dark-text-main-color' : 'text-gray-900 dark:text-dark-text-main-color'
                                            }`
                                        }
                                        value={country}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {country.title}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-slate-500' : 'text-light-text-main-color dark:text-dark-text-main-color'
                                                            }`}
                                                    >
                                                        <Icons.Check className="w-5 h-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
            <span className="invisible font-extralight text-[0.70rem] text-slate-400 dark:text-slate-600 peer-invalid:visible mt-2 mb-4">
                * {error ?? 'Please indicate the value for ' + label}
            </span>
        </div>
    )
}
