import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <div className='sticky top-0 z-30 border-gray-200 bg-black/10 backdrop-blur-lg px-[1rem] sm:px-0'>
      <ul className='flex items-center border-red-300 border-0 py-4 max-w-[1050px] mx-auto text-xs'>
        <Link href='/' className='mr-auto text-[1.2rem] font-bold flex items-center'>
        <Image
            src="/images/vs-logo.png"
            width={25}
            height={25}
            alt="Picture of the author"
            className='mr-2'
        />VectorShift</Link>
        <Link href='/' className='ml-auto mr-4 font-medium sm:text-[1rem]'>Pricing</Link>
        <Link href='https://app.vectorshift.ai/' target='_blank' className='mr-4 font-medium hidden sm:block sm:text-[1rem]'>Login</Link>
        <Link href='https://calendly.com/albert_mao/30min?month=2023-10' target='_blank' className=' font-semibold'><button className='px-2 py-1 bg-white rounded-[0.5rem] text-[#00038B] sm:px-4 sm:py-2 text-[1rem]'>Book Demo</button></Link>
      </ul>
    </div>
  );
};

export default Navbar;
