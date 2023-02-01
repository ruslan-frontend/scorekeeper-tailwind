import React, { ReactNode } from 'react';

interface ButtonProps {
    children?: ReactNode;
    className?: string
}

export const Button: React.FC<ButtonProps> = ( {className, children} ) => {
    return (
        <button className={className}>{children}</button>
    )
};