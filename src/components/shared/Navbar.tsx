import Image from "next/image";
import React from "react";
import farm_logo from '@assets/farm_logo.png'

function Navbar() {
  return (
    <nav className='flex flex-row justify-around items-center h-[200px] z-50 text-primary text-[20px] sticky shadow-lg'>
      <div className='flex flex-row items-center justify-around'>
        <span className=''>HOME</span>
        <span className=''>ABOUT FARM</span>
        <span className=''>GALLERY</span>
      </div>
      <div className='h-[160px] w-[160px]'>
        <Image src={farm_logo} alt='farm-logo' className="object-contain"/>
      </div>
      <div className=''>
        <span className="">CONTACTS</span>
      </div>
    </nav>
  );
}

export default Navbar;
