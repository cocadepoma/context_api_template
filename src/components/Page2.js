import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { Header } from './Header';

export const Page2 = () => {

    const { data } = useContext(DataContext)

    return (
        <pre>
            <Header text={'Página 2'} />
            <hr />
            {JSON.stringify(data?.data, null, 3)}
        </pre>
    )
}
