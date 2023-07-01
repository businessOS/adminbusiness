export interface IAddress {
  city?: string
  country?: string
  dir?: string
  number?: string
  postCode?: string
  state?: string
  street?: string
}

export interface IPhone {
  main?: number
  office?: string
  mobile?: string
  fax?: String
}

interface IPoint {
  lat?: number
  long?: number
}

export interface ILoc {
  type?: string
  coord?: IPoint
}

