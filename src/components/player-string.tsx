import React from 'react';
import { IPlayer } from '../interfaces/interface';
import { Button } from './button';

interface PlayerStringProps {
    item: IPlayer
    data: IPlayer[]
    setData?: any
}


export const PlayerString: React.FC<PlayerStringProps> = ( { item, data, setData } ) => {
    return (
        <div className='flex justify-between items-center'>
            <div className='h-[50px] w-[55%] flex justify-around border bg-slate-300 items-center font-bold'>
                <p>{item.name}</p>
            </div>
            <div className='flex items-center justify-between'>
                <p>{item.score}</p>
                <Button className='border '>
                    <img
                    className='w-[50px]'
                    src="./images/minus.svg" 
                    alt="минус" 
                    />
                </Button>            
                <Button className='border'>
                    <img 
                    className='w-[50px]'
                    src="./images/plus.svg" 
                    alt="минус" 
                    />
                </Button>   
            </div>
        </div>
    )
};