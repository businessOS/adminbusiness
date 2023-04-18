import { FC } from 'react'

interface UserComponentProps {

}

const UserComponent: FC<UserComponentProps> = ({ }) => {
    return <div>UserComponent</div>
}

export default UserComponent



/**
 * 
 type Subscription {
  active  String
  expires DateTime
  token   String
}

* 
type Address {
  city     String
  country  String
  dir      String
  number   String
  postCode String
  state    String
  street   String
}

type Phone {
  main   Int
  office String
  mobile String
  fax    String
}
 
 type perfil {
  id                 String       @id @default(auto()) @map("_id") @db.ObjectId
  userId             String       @db.ObjectId
  partition          String       @unique @map("_partition")
  username           String       @default("")
  isSetup            Boolean      @default(false)
  role               String       @default("none")
  canReadPartitions  String[]
  canWritePartitions String[]
  address            Address
  phones             Phone
  description        String       @default("")
  subscription       Subscription  
 }

type User {
  id            String     @id @default(auto()) @map("_id") @db.ObjectId
  name          String?    @default("")
  email         String?    @unique
  emailVerified DateTime?
  image         String?    @map("picture")
  apiKey        ApiKey[]
  apiKeyId      String?
}

 */