import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext';

export const Customers = () => {

    const { customers } = useContext(DataContext);
    const customersArray = customers?.state?.customers;


    return (
        <ul>
            {
                customersArray && customersArray.length > 0 &&

                customersArray.map(customer => (
                    <li key={customer.id}>
                        Nombre: {customer.name} - Edad: {customer.age}
                    </li>
                ))


            }
        </ul>
    )
}
