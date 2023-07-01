import { configureASteps } from './assets/steps'
import { cn } from "@/lib/utils"

import { useConfigureStore } from '@/interfaces/configure/configureStore'
import ConfigureStoreInitializer from '@/interfaces/configure/configureStoreInitializer'
import { useUserStore } from "@/interfaces/users/userStore"

import FormComponent from './components/FormComponent'
import ConfigureMultSteps from './components/ConfigureMultSteps'



export const metadata = {
  title: 'Business - Settings - Setup',
  description: "Configure role and user's profiles",
  icons: 'favicon.ico'
}

const page = ({ }) => {
  // Server & Client state management with zustand
  useConfigureStore.setState({
    name: '',
    lastName: '',
    email: useUserStore.getState().email ?? '',
    id: '',
    userId: '',
    partition: '',
    username: '',
    isSetup: true,
    role: 'user',
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
        number: '0',
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
      localitation: {
        type: '',
        coord: {
          lat: 0.00,
          long: 0.00,
        }
      },
    },
    pageNumber: 0,
    pagelength: configureASteps.length,
    steps: configureASteps
  })

  return (
    <div className='flex flex-col-reverse flex-1 overflow-hidden rounded-md shadow-2xl md:flex-row bg-light-main shadow-slate-950 dark:bg-dark-main sm:border-8 sm:rounded-xl sm:border-light-border dark:sm:border-dark-border'>
      <ConfigureStoreInitializer name={''} lastName='' id={''} userId={''} partition={''} username={''} isSetup={false} role={''} description={''}
        email={useUserStore.getState().email ?? ''}
        address={{
          city: '',
          country: '',
          dir: '',
          number: '',
          postCode: '',
          state: '',
          street: ''
        }} phones={{
          main: 1,
          office: '',
          mobile: '',
          fax: '',
        }}
        pageNumber={0}
        pagelength={configureASteps.length}
        steps={configureASteps}
      />

      <aside className={cn('flex flex-col m-4 mt-0 md:mt-4 md:flex-initial md:w-1/3 lg:w-1/4 bg-light-aside dark:bg-dark-aside rounded-bl-xl rounded-br-xl md:rounded-none md:rounded-s-xl')}>
        <ConfigureMultSteps />
      </aside>

      <div className="flex flex-col flex-0 md:flex-grow md:max-h-[85vh] mx-4 my-4 border-0 md:border-2 dark:border-gray-800 overflow-hidden">
        <div className="flex-grow max-h-[50vh] md:max-h-full mx-4 scroll-smooth scrollbar-thumb-rounded-full scrollbar-track-rounded-fulls scrollbar-thin scrollbar-thumb-light-aside dark:scrollbar-thumb-dark-aside overflow-y-auto hover:scrollbar-thumb-black px-4 md:px-0">
          <FormComponent />

        </div>
      </div>
    </div>
  )
}

export default page



