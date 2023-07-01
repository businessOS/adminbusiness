import { create } from 'zustand'

export const useUserStore = create<IUserStore>((set) => ({
    name: '',
    username: '',
    image: '',
    email: '',
    role: '',
    description: '',
    currentCompany: ''
}))