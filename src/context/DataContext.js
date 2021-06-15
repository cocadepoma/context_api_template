import React, { createContext, useReducer, useState } from "react";
import { customersReducer } from "../reducers/customersReducer";



const initialValue = {
    name: 'Francisco',
    age: 32
}
const initialColor = {
    color: 'red'
}

const initialState = {
    customers: []
}

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [data, setData] = useState(initialValue);
    const [color, setColor] = useState(initialColor);
    const [state, dispatch] = useReducer(customersReducer, initialState);

    const contextData = {

        data: {
            data, setData
        },
        color: {
            color, setColor
        },
        customers: {
            state, dispatch
        }
    }

    return (
        <DataContext.Provider value={contextData}>
            {children}
        </DataContext.Provider>
    )
}



