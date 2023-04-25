import { create } from 'zustand'

export type IConfigureStore = {
    name: string,

    id: string,
    userId: string,
    partition: string,
    username: string,
    isSetup: boolean,
    role: string,
    description: string,

    address: {
        city: string,
        country: string,
        dir: string,
        number: string,
        postCode: string,
        state: string,
        street: string,
    },
    phones: {
        main: 1,
        office: string,
        mobile: string,
        fax: string,
    },
    pageNumber: number,
    pagelength: number,

}

export const useConfigureStore = create<IConfigureStore>((set) => ({
    name: '',
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
}))

/**
 * actions: {
        nextPage: () => set((state) => ({ pageNumber: state.pageNumber > 0 ? state.pageNumber - 1 : state.pageNumber })),
        previousPage: () => set((state) => ({ pageNumber: state.pageNumber < state.pagelength ? state.pageNumber + 1 : state.pageNumber }))
    },
 */