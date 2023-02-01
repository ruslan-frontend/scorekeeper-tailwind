import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';

export const Navigation = () => {
    return (
        <nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-100 text-black'>
            <Link to='/'>
                <Button 
                >
                    <img 
                    src="./images/person.svg" 
                    alt="игроки" 
                    />
                </Button>
            </Link>
            <Link to='/table'>
                <Button 
                className="">
                    <img 
                    src="./images/table.svg" 
                    alt="таблица" 
                    />
                </Button>
            </Link>
            <Button>
                <img 
                src="./images/list.svg" 
                alt="сортировка" 
                />
            </Button>
            <Button>
                <img 
                src="./images/refresh.svg" 
                alt="сброс" 
                />
            </Button>
        </nav>
    )
};