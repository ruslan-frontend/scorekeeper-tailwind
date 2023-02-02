import React, { useState } from 'react';
import { PlayerString } from '../components/player-string';
import { IPlayer } from '../interfaces/interface';

interface PlayerProps {
    item?: IPlayer
    data: IPlayer[]
    setData?: any
}

export const Players: React.FC<PlayerProps> = ( { item, data, setData } ) => {

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