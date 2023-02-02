import React from 'react';
import { IPlayer } from '../interfaces/interface';
import { Button } from './button';

interface PlayerStringProps {
    item: IPlayer
    data: IPlayer[]
    setData?: any
}


export const PlayerString: React.FC<PlayerStringProps> = ( { item, data, setData } ) => {

    const changeScore = (num: number) => {
        setData(data.map((i: IPlayer) => i.id === item.id ? {...i, score: i.score+num} : i ))
    }



    return (
        <div className='flex justify-between items-center bg-red-400'>
            <div className='h-[50px] w-[55%] flex justify-around border items-center font-bold'>
                <p>{item.name}</p>
            </div>
            <div className='flex items-center justify-between'>
                <p>{item.score}</p>
                <Button className='border '>
                    <img
                    className='w-[50px]'
                    src="./images/minus.svg" 
                    alt="минус" 
                    onClick={() => changeScore(-1)}
                    />
                </Button>            
                <Button className='border'>
                    <img 
                    className='w-[50px]'
                    src="./images/plus.svg" 
                    alt="минус" 
                    onClick={() => changeScore(1)}
                    />
                </Button>   
            </div>
        </div>
    )
};