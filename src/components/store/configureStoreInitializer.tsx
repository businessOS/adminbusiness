'use client'
import { IConfigureStore } from "./configureStore";
import { useConfigureStore } from "./configureStore"
import { useRef } from "react";

function ConfigureStoreInitializer({
    name,
    id,
    userId,
    partition,
    username,
    isSetup: boolean,
    role,
    description,

    address: {
        city,
        country,
        dir,
        number,
        postCode,
        state,
        street,
    },
    phones: {
        main,
        office,
        mobile,
        fax,
    },
}: IConfigureStore) {
    const initialized = useRef(false)

    if (!initialized.current) {
        useConfigureStore.setState({
            name,
            id,
            userId,
            partition,
            username,
            isSetup: boolean,
            role,
            description,

            address: {
                city,
                country,
                dir,
                number,
                postCode,
                state,
                street,
            },
            phones: {
                main,
                office,
                mobile,
                fax,
            }
        })
        initialized.current = true
    }
    return null
}

export default ConfigureStoreInitializer