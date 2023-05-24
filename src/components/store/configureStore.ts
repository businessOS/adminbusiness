import { create } from 'zustand'
import { z } from 'zod';

const updateStep = (steps: ISteps[], title: string, state: 'complete' | 'focus' | 'default' | 'disable'): ISteps[] =>
    steps.map((step) => ({
        ...step,
        state: step.title === title ? state : step.state,
    }));


export type IConfigureStore = {
    name: string;
    lastName: string;
    email: string;
    id: string;
    userId: string;
    partition: string;
    username: string;
    isSetup: boolean;
    role: string;
    description: string;

    address: {
        city: string;
        country: string;
        dir: string;
        number: string;
        postCode: string;
        state: string;
        street: string;
    };
    phones: {
        main: 1;
        office: string;
        mobile: string;
        fax: string;
    };
    pageNumber: number;
    pagelength: number;
    steps: ISteps[];
    updateStep?: (title: string, state: 'complete' | 'focus' | 'default' | 'disable') => void | null;
}


export const useConfigureStore = create<IConfigureStore>((set) => ({
    name: '',
    lastName: '',
    email: '',
    id: '',
    userId: '',
    partition: '',
    username: '',
    isSetup: true,
    role: '',
    description: '',

    address: {
        city: '',
        country: '',
        dir: '',
        number: '',
        postCode: '',
        state: '',
        street: '',
    },
    phones: {
        main: 1,
        office: '',
        mobile: '',
        fax: '',
    },
    pageNumber: 0,
    pagelength: 0,
    steps: [],
    updateStep: (title: string, state: 'complete' | 'focus' | 'default' | 'disable') =>
        set((currentState) => ({
            ...currentState,
            steps: updateStep(currentState.steps, title, state),
        })),
}))

const FormData = z.object({
    name: z.string().min(4),
    lastName: z.string().min(3),
    email: z.string().email(),
    id: z.string().min(1),
    userId: z.string().min(3),
    partition: z.string().min(5),
    username: z.string().min(4),
    isSetup: z.boolean(),
    role: z.enum(['Company', 'User']),
    description: z.string().min(4),

    address: z.object({
        city: z.string().min(4),
        country: z.string().min(4),
        dir: z.string().min(4),
        number: z.string().min(1),
        postCode: z.string().min(4),
        state: z.string().min(4),
        street: z.string().optional(),
    }),
    phones: z.object({
        main: z.number().optional(),
        office: z.string().min(9),
        mobile: z.string().optional(),
        fax: z.string().optional(),
    }),
    pageNumber: z.number(),
    pagelength: z.number(),
    steps: z.array(z.any()).optional(),
    updateStep: z.void(),
})

const ProfileData = z.object({
    name: z.string().min(4),
    lastName: z.string().min(3),
    email: z.string().email(),
    username: z.string().min(4),
    description: z.string().min(4),
    address: z.object({
        city: z.string().min(4),
        country: z.string().min(4),
        dir: z.string().min(4),
        number: z.string().min(1),
        postCode: z.string().min(4),
        state: z.string().min(4),
        street: z.string().optional(),
    }),
    phones: z.object({
        main: z.number().optional(),
        office: z.string().min(9),
        mobile: z.string().optional(),
        fax: z.string().optional(),
    }),
})

export const validateConfigureStore = (store: unknown, step: 'all' | 'role' | 'profile') => {
    let isValidData = false

    switch (step) {
        case 'all':
            isValidData = FormData.safeParse(store).success;
            break;
        case 'profile':
            const data = ProfileData.safeParse(store)
            console.log('validating profile: ', data)
            isValidData = data.success
        default:
            break;
    }

    return isValidData
}
/**
 * actions: {
        nextPage: () => set((state) => ({ pageNumber: state.pageNumber > 0 ? state.pageNumber - 1 : state.pageNumber })),
        previousPage: () => set((state) => ({ pageNumber: state.pageNumber < state.pagelength ? state.pageNumber + 1 : state.pageNumber }))
    },
 */

