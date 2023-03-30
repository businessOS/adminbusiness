'use client'
import { FC, useState } from 'react'
import { ToggleGroup, ToggleGroupItem } from '@/ui/atoms/ToogleGroup';
import './LanguageToggle.css'
import Image from 'next/image';

interface LanguageToggleProps {

}

const LanguageToggle: FC<LanguageToggleProps> = ({ }) => {

    const [value, setValue] = useState('us');

    return (
        <ToggleGroup
            className="ToggleGroup"
            type="single"
            value={value}
            onValueChange={(value) => {
                if (value) setValue(value);
            }}
        >
            <ToggleGroupItem value="us" className='ToggleGroupItem' >
                <Image src="/american-us-flag.jpg" alt="American Flag" width={16} height={16} />
            </ToggleGroupItem>
            <ToggleGroupItem value="sp" className='ToggleGroupItem'>
                <Image src="/spain-sp-flag.jpg" alt="American Flag" width={16} height={16} />
            </ToggleGroupItem>
        </ToggleGroup>
    );
}

export default LanguageToggle