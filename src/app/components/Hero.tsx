
import Image from "next/image";

const Hero = () => {
    return(
        <div className="px-[1rem] sm:px-0">
          <div className='mt-24 mb-4 flex items-center flex-col align-middle gap-[5rem] sm:flex-row sm:gap-0'>
            <div>
              <h1 className='home-heading w-[80%] leading-[1.1] font-semibold mb-4 text-[2.8rem] sm:text-[3.5rem]'>Build and Deploy <span className='text-[#e984ff]'>Generative AI</span> Applications in minutes</h1>
              <p className='home-description text-[#c6c6c6] font-medium w-[69%] text-[1rem] sm:text-[1.3rem]'>
                Build chatbots, document search engines, and document creation workflows leveraging Large Language Models (e.g., ChatGPT) with no code.
              </p>
              <div className='flex my-10 gap-4'>
              <button className='px-4 py-2 bg-white text-black font-semibold rounded-md text-[1.2rem]'>Try us for free</button>
                <button className='px-4 py-2 bg-black text-white font-semibold rounded-md text-[1.2rem] border-white border-2'>Talk to us</button>
              </div>
              < h1 className='font-semibold mb-2'>Backed By</h1>
            <Image
                src="/images/vs-ycomb.png"
                width={200}
                height={200}
                alt="Picture of the author"
              />
            </div>
            <Image
              src="/images/vs-main.png"
              width={400}
              height={400}
              alt="Picture of the author"
              className='mr-2'
            />
          </div>
        </div>
    )
}

export default Hero;