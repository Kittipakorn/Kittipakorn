import { useState } from 'react'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'

export default function Portfolio() {
    return (
        <div>
            <Navbar />
        <div className='flex flex-col min-h-screen max-w-[100vw] mx-12'>
            <p className='text-center text-5xl my-8 font-bold'>Portfolio</p>
            <p className='text-center text-xl '>คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยมหิดล</p>
            <p className='text-center text-xl mb-10 '>ติดสัมภาษณ์✅ ผ่านสัมภาษณ์✅</p>
            <div className='grid grid-cols-3 max-md:grid-cols-1 gap-3'>
                <img className='border' src="MU/Portfolio_page-0001.png" alt="" />
                <img className='border' src="MU/Portfolio_page-0002.jpg" alt="" />
                <img className='border' src="MU/Portfolio_page-0003.jpg" alt="" />
                <img className='border' src="MU/Portfolio_page-0004.jpg" alt="" />
                <img className='border' src="MU/Portfolio_page-0005.jpg" alt="" />
                <img className='border' src="MU/Portfolio_page-0006.jpg" alt="" />
                <img className='border' src="MU/Portfolio_page-0007.jpg" alt="" />
                <img className='border' src="MU/Portfolio_page-0008.jpg" alt="" />
                <img className='border' src="MU/Portfolio_page-0009.jpg" alt="" />
                <img className='border' src="MU/Portfolio_page-0010.jpg" alt="" />
            </div>
            {/* <div className='flex items-center  mx-[10vw] gap-10 my-auto'>
                    <p className='text-5xl font-bold mx-auto'>Coming Soon..</p>
                    
            </div> */}
        </div>
        <Footer />
        </div>
    )
}

