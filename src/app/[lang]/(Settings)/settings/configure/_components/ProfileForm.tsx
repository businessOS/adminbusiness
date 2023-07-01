import { DashboardHeader } from '@/ui/atoms/Header'
import { DashboardShell } from '@/ui/atoms/shell'
import React, { FC, createRef, useState } from 'react'
import NavButtoms from './NavButtoms'
import { InputForm } from '@/ui/atoms/forms/InputForm'
import { Card } from '@/ui/atoms/card'

import { useConfigureStore, validateConfigureStore } from '@/interfaces/configure/configureStore'

import { SelectMenuOption } from '@/ui/atoms/forms/countries/types'
import SelectCountry from '@/ui/atoms/forms/countries/SelectCountry'
import { cn } from '@/lib/utils'

interface ProfileFormProps {
    className?: string
}

const ProfileForm: FC<ProfileFormProps> = ({ className }) => {
    const store = useConfigureStore()

    const validate = () => {
        return validateConfigureStore(
            {
                name: store.name,
                lastName: store.lastName,
                email: store.email,
                username: store.username,
                description: store.description,
                address: store.address,
                phones: store.phones,
            },
            'profile')
    }

    const [isOpen, setIsOpen] = useState(false);
    // Default this to a country's code to preselect it
    const [country, setCountry] = useState<SelectMenuOption["value"]>("PT");
    const countryRef = createRef<HTMLDivElement>();

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        useConfigureStore.setState({ [e.target.name]: e.target.value })
    }

    const onNestedChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, nestedName: string) => {

        if (nestedName === 'phones')
            useConfigureStore.setState({ [nestedName]: { ...store.phones, [e.target.name]: e.target.value } })
        if (nestedName === 'address')
            useConfigureStore.setState({ [nestedName]: { ...store.address, [e.target.name]: e.target.value } })
    }

    const onChangeCountry = (value: { title: string; value: string; }) => {
        useConfigureStore.setState({ address: { ...store.address, country: value.title } })
    }

    return (
        <DashboardShell className={cn('max-w-[90rem] max-h-[70vh]', className)}>
            <DashboardHeader
                heading="Profile"
                text="Personal data needed to start to work with the solutions."
            />
            <div className="grid gap-4 md:gap-6 lg:gap-8 ">
                <Card>
                    <Card.Content className='flex flex-wrap gap-0 pt-4 pb-10 basis-auto'>
                        <div className='flex flex-wrap w-full gap-0 px-6 pt-4 mr-0 md:mr-4 basis-auto'>
                            <InputForm tabIndex={20} value={store.email} onChange={onChange} label='Email' name='email' disabled={true} />
                            <InputForm tabIndex={21} value={store.username} onChange={onChange} label='Nick name' name='username' error='please indice your user name' autoFocus required />
                            <InputForm tabIndex={22} value={store.name} onChange={onChange} label='First name' name='name' error='please indice your first name' required />
                            <InputForm tabIndex={23} value={store.lastName} onChange={onChange} label='Last name' name='lastName' error='please indice your last name' required />
                            <SelectCountry name={'country'} label={'Country'} required={true} onChange={onChangeCountry} />
                            <InputForm tabIndex={25} value={store.address.state} onChange={(e) => onNestedChange(e, 'address')} label='State' name='state' required />
                            <InputForm tabIndex={26} value={store.address.city} onChange={(e) => onNestedChange(e, 'address')} label='City' name='city' required />
                            <InputForm tabIndex={27} value={store.address.number} onChange={(e) => onNestedChange(e, 'address')} label='Number' name='number' required />
                            <InputForm tabIndex={28} value={store.address.postCode} onChange={(e) => onNestedChange(e, 'address')} label='Postcode' name='postCode' required />
                            <InputForm tabIndex={29} value={store.address.dir} onChange={(e) => onNestedChange(e, 'address')} label='Address' name='dir' required />
                            <InputForm tabIndex={30} value={store.phones.office} onChange={(e) => onNestedChange(e, 'phones')} label='Office' name='office' type='tel' />
                            <InputForm tabIndex={31} value={store.phones.mobile} onChange={(e) => onNestedChange(e, 'phones')} label='Mobile' name='mobile' required type='tel' />
                            <InputForm tabIndex={32} value={store.description} onChange={onChange} label='Description' name='description' error='please indice your description' required />
                        </div>
                    </Card.Content>
                </Card>

                <NavButtoms validate={validate} />
            </div>
        </DashboardShell>


    )
}

export default ProfileForm

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