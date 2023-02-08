import React from 'react'

interface ButtonProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}

export const Button = ({ children, className }: ButtonProps) => {
    return (
        <button className={`bg-gradient-to-r from-blue-400 to-blue-700 text-white px-4 py-2 rounded-md ${className}`}>
            {children}
        </button>
    )
}
