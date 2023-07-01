'use client'

import { FC, useState } from 'react'
import { ToggleGroup, ToggleGroupItem } from '@/ui/atoms/ToogleGroup';
import Image from 'next/image';

import { usePathname } from 'next/navigation'

import { useRouter } from 'next/navigation';

import { i18n } from '../../../utils/i18n-config'
import './LanguageToggle.css'

const LanguageToggle: FC = ({ }) => {
    const router = useRouter();
    const [value, setValue] = useState('');

    const pathName = usePathname()

    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        const containLocale = i18n.locales.find(item => item === segments[1])

        if (containLocale) {
            segments[1] = locale
        }

        setValue(value);

        return segments.join('/')
    }

    return (
        <ToggleGroup
            className="ToggleGroup"
            type="single"
            value={value}
        >
            {i18n.locales.map((locale) => (
                <ToggleGroupItem key={locale} value={locale} className='ToggleGroupItem' onClick={() => router.push(redirectedPathName(locale))}>
                    {locale === 'en' && <Image src="/american-us-flag.jpg" alt="American Flag" width={16} height={16} />}
                    {locale === 'es' && <Image src="/spain-sp-flag.jpg" alt="American Flag" width={16} height={16} />}
                </ToggleGroupItem>
            ))}
        </ToggleGroup>
    );
}

export default LanguageToggle