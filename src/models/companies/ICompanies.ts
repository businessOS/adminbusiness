import { IAddress, IPhone, ILoc } from "@/models/common"
import { IMemberOf } from "@/models/members/IMembers"

export interface ICompanies {
    id?: string
    partition?: string
    groupId: string
    ownerId: string
    NIF: string
    picture: string
    imageUrl: string
    logoUrl: string
    isActive: boolean
    canTransferGoods: boolean
    sharedProducts: boolean
    name: string
    descriptions: string
    oganization: string
    address: IAddress
    phones: IPhone
    localitation?: ILoc
    canWritePartition?: string[]
    canReadPartition?: string[]
    MemberOf?: IMemberOf[]
}