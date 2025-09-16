'use client'

import { createContext, useState } from "react";

export const AppContext = createContext();


export const AppProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);
    return (
        <AppContext.Provider value={{ cartProducts, setCartProducts }}>
            {children}
        </AppContext.Provider>
    )
}