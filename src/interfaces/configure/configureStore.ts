import { create } from 'zustand'
import { z } from 'zod';

import { ICompanies } from '@/models/companies/ICompanies'

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)

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
    },
    phones: {
        main: 1;
        office: string;
        mobile: string;
        fax: string;
    },
    company?: ICompanies,
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
    company: {
        id: '',
        partition: '',
        groupId: '',
        ownerId: '',
        NIF: '',
        picture: '',
        imageUrl: '',
        logoUrl: '',
        isActive: false,
        canTransferGoods: false,
        sharedProducts: false,
        name: '',
        descriptions: '',
        oganization: '',
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
            main: 0,
            office: '',
            mobile: '',
            fax: '',
        },
        localitation: {
            type: '',
            coord: {
                lat: 0,
                long: 0,
            },
        },
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

const CompanyData = z.object({
    id: z.string(),
    partition: z.string(),
    groupId: z.string().min(2),
    ownerId: z.string().min(2),
    NIF: z.string().min(10),
    picture: z.string().optional(),
    imageUrl: z.string().optional(),
    logoUrl: z.string().optional(),
    isActive: z.boolean(),
    canTransferGoods: z.boolean(),
    sharedProducts: z.boolean(),
    name: z.string().min(2),
    descriptions: z.string().min(5),
    oganization: z.string().min(5),
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
        main: z.string().regex(phoneRegex, 'Invalid Number!'),
        office: z.string().regex(phoneRegex, 'Invalid Number!'),
        mobile: z.string().regex(phoneRegex, 'Invalid Number!'),
        fax: z.string().regex(phoneRegex, 'Invalid Number!'),
    }),
    localitation: z.object({
        type: z.string(),
        coord: z.object({
            lat: z.number(),
            long: z.number(),
        })
    }),
})

export const validateConfigureStore = (store: unknown, step: 'all' | 'role' | 'profile' | 'company') => {
    let isValidData = false

    switch (step) {
        case 'all':
            isValidData = FormData.safeParse(store).success;
            break;
        case 'profile':
            const data = ProfileData.safeParse(store)
            console.log('validating profile: ', data)
            isValidData = data.success
            break;
        case 'company':
            const dataCo = CompanyData.safeParse(store)
            console.log('validating company: ', dataCo)
            isValidData = dataCo.success
            break;
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

