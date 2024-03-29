'use client'


import { Provider } from "react-redux"
import {appStore} from "@/utils/appStore"
import React from "react";

interface ProviderProp {
    children: any;
    
    
}


const Providers:React.FC<ProviderProp> = ({children}) => {
    return (
        <Provider store={appStore}>
            {children}
        </Provider>
    )
}


export default Providers;