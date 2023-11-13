import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface UseCardsProps{
    title: string;
    description: string;
    image: string;
}

const UseCards: React.FC<UseCardsProps> = ({ title, image, description }) => {
  return (
    <div className='border-2 border-gray-900 w-full bg-black/60 rounded-2xl text-center p-6 hover:scale-[101%] sm:w-[30%]'>
        <Image
              src={`/images/${image}.png`}
              width={150}
              height={150}
              alt="Picture of the author"
              className='mx-auto my-4'
        />
        <h1 className='text-[1.2rem] my-4 font-bold'>{title}</h1>
        <p className='mb-6 text-gray-400'>{description}</p>
    </div>
  )

}

export default UseCards;