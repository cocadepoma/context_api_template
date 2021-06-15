import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { Header } from './Header'

export const Page3 = () => {

    const { color, customers } = useContext(DataContext);
    const dispatch = customers?.dispatch;

    return (
        <pre>
            <Header text={'Página 3'} />
            <hr />
            {JSON.stringify(color?.color, null, 3)}
            <hr />

            <button onClick={() => dispatch({
                type: 'ADD_CUSTOMER',
                payload: { id: new Date().getTime(), name: 'Pepe', age: 42 }
            })}>
                Add new customer
                </button>
        </pre>
    )
}
