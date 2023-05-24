'use client'
import { useConfigureStore } from '@/components/store/configureStore'
import MultiSteps from '@/ui/molecules/MultiSteps/MultiSteps'
import { FC } from 'react'

interface ConfigureMultStepsProps {
}

const ConfigureMultSteps: FC<ConfigureMultStepsProps> = ({ }) => {
    const store = useConfigureStore()
    return (
        <>
            <MultiSteps aSteps={store.steps} />
        </>
    )

}

export default ConfigureMultSteps