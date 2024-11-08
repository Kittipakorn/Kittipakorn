import { useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

export default function Project() {
    return (
        <div>
            <Navbar />
            <div className='flex flex-col min-h-screen max-w-[100vw]'>
                <div className='flex items-center  mx-[10vw] gap-10 my-auto'>
                    <p className='text-3xl font-bold mx-auto'>Coming Soon..</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

