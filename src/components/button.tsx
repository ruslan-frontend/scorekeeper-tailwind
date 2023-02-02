import React, { ReactNode } from 'react';

interface ButtonProps {
    children?: ReactNode
    className?: string
    onClick?: ()=>void

}

export const Button: React.FC<ButtonProps> = ( {className, children } ) => {
    return (
        <button className={className}>{children}</button>
    )
};