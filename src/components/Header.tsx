import React from 'react'

export const Header = ({ title }) => {
    return (
        <div className='flex flex-col justify-center'>
            <h1 className='pl-7 px-7'>
                {title}
                <hr className='border-2 border-purple-500'/>
            </h1>
        </div>
    )
}

