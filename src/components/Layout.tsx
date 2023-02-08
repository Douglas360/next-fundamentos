import { title } from 'process'
import React from 'react'
import { Header } from './Header'


interface LayoutProps {
    title?: string
    children: any
}

const Layout = ({ children, title }: LayoutProps) => {
    return (
        <div className='flex flex-col w-2/3 bg-white text-gray-800 rounded-md'>
            <Header
                title={title} />

           <div className='p-6'>
           {children}
           </div>

        </div>
    )
}

export default Layout