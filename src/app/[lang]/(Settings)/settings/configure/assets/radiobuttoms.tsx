
export const roleRadioButtoms: IRadioButoms[] = [
    {
        id: 'company',
        icon: <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>,
        title: 'Company',
        description: 'Enable to create stores'
    },
    {
        id: 'user',
        icon: <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>,
        title: 'User',
        description: 'Cashier, seller, others'
    }
]