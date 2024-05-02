import Image from 'next/image';
import React from 'react';
import farmLogo from '@assets/farm_logo.png';
import Link from 'next/link';

function Footer() {
  return (
    <div className='p-10 flex justify-between bg-primaryLight text-primary h-auto'>
      <div className='flex flex-col gap-4'>
        <Image src={farmLogo} alt='farm logo' />
        <span className='tracking-wider text-sm'>
          Welcome to St Joseph farm, where we cultivate a harmonious blend of
          agriculture and education. Nestled in the heart of Luwero, our farm is
          a haven for poultry keeping, banana cultivation, coffee growing, and
          eucalyptus tree farming. We pride ourselves on sustainable farming
          practices that prioritize the health of our land, animals, and
          community. Our commitment to organic methods ensures that every
          product we yield is not only delicious but also environmentally
          responsible. In addition to our agricultural endeavors, we are
          passionate about nurturing the next generation of agricultural
          enthusiasts. Through our comprehensive industrial training program, we
          provide hands-on learning experiences for students eager to delve into
          the world of farming. Whether you're a seasoned farmer, a student
          seeking knowledge, or simply a lover of fresh, locally sourced
          produce, we invite you to explore all that St Joseph farm has to
          offer. Join us in our mission to cultivate a brighter, greener future
          for generations to come.
        </span>
      </div>
      <div className=''>
        <span className=''></span>
        <Link href=''>Home</Link>
        <Link href=''>Our Team</Link>
        <Link href=''>Our Partners</Link>
      </div>
      <div className=''>
        <span className=''>Farm Projects</span>
        <Link href='' className=''>Poultry</Link>
        <Link href='' className=''>Banana Cultivation</Link>
        <Link href='' className=''>Coffee Growing</Link>
        <Link href='' className=''>Eucalyptus farming</Link>
      </div>
      <div className=''>
        <span className=''>Contacts</span>
      </div>
    </div>
  );
}

export default Footer;
