import React from 'react'

interface FormProps {
    type?: 'text' | 'number'
    text: string
    value: any
    onlyRead?: boolean
    className?: string
    onChange?: (value: any) => void

}

export const Input = ({ text, type, value, onlyRead, className, onChange }: FormProps) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <label htmlFor="" className='mb-2'>{text}</label>
            <input
                type={type ?? 'text'}
                value={value}
                readOnly={onlyRead}
                onChange={e => onChange?.(e.target.value)}
                className='border border-purple-500 rounded-lg focus:outline-none bg-gray-100 px-4 py-2'
            />
        </div>
    )
}
