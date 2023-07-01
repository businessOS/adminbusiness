interface IAccess {
    pathName: string
    auth: string
}

interface IRoleAccess {
    roleName: string
    app: string
    isAdministrator: boolean
    access: IAccess[]
}

export interface IMemberOf {
    id: string
    userId: string
    companyId: string
    confirmed: boolean
    roleAccess: IRoleAccess
}
