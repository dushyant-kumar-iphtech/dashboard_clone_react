import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { PiWarningCircleFill } from "react-icons/pi";
import { MdLightMode } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
const Header = () => {
  return (
    <div className='w-full h-15 py-3 gap-x-2 px-2 pr-4 my-auto border bottom-1 flex justify-end'>
       
       <div className='flex gap-x-4 items-center mr-3'>
        <IoSearchOutline  className='text-2xl bg-[#E2E8F0] rounded-full'/>
        <TiMessages className='text-2xl bg-[#E2E8F0] rounded-full' />
        <PiWarningCircleFill className='text-2xl bg-[#E2E8F0] rounded-full' />
        <MdLightMode  className='text-2xl bg-[#E2E8F0] rounded-full'/>
       </div>
      

        <div className='flex gap-x-3 mr-2 items-center'>
        <img className='rounded-full w-8 h-8 ' src="https://preview.cruip.com/mosaic/images/user-avatar-32.png" alt="" />
        <p className='p-0 m-0'>Acme Inc.</p>
        <IoIosArrowDown className='text-xl text-gray-500  rounded-full' />
        </div>


    </div>
  )
}

export default Header