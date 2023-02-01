import React, { useState } from 'react';
import { PlayerString } from '../components/player-string';

export const Players = () => {

    const [data, setData] = useState([{id: 1, name: 'Руслан', score: 27}, {id: 1, name: 'Чулпан', score: 22}, {id: 1, name: 'Никита', score: 17}, {id: 1, name: 'Аделина', score: 12}])

    return (
        <>
        {data.map(
            (item) => (
                <PlayerString 
                key={item.id}
                item={item}
                data={data}
                setData={setData}
                />
            )
        )}
        </>
    )
};