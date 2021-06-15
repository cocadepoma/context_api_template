import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext';

export const ButtonData = () => {

    const { data, color } = useContext(DataContext);

    return (
        <div>
            <button onClick={
                () => {
                    data?.setData({ name: 'Paco', age: 33 });
                    color?.setColor({ color: 'green' })
                }
            }>Cambiar data</button>
        </div>
    )
}
