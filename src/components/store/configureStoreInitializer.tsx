'use client'
import { IConfigureStore } from "./configureStore";
import { useConfigureStore } from "./configureStore"
import { useRef } from "react";

function ConfigureStoreInitializer({
    name,
    lastName,
    email,
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
    pageNumber,
    pagelength,
    steps,
}: IConfigureStore) {
    const initialized = useRef(false)

    if (!initialized.current) {
        useConfigureStore.setState({
            name,
            lastName,
            email,
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
            pageNumber,
            pagelength,
            steps,
        })
        initialized.current = true
    }
    return null
}

export default ConfigureStoreInitializer