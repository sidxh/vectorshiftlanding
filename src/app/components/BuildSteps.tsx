
import React from "react";
import Image from "next/image";

const BuildSteps = () => {
    return(
        <div className='mb-[8rem] hidden'>
            <h1 className='text-center text-[3rem] font-bold mt-[15rem]'>Build Pipelines In Minutes</h1>
            <p className='w-[90%] mx-auto text-center text-md text-gray-300 mb-16'>Involving LLMs, Data Sources, & Vector Databases. Productionize pipelines via API.</p>
            <div className='flex items-center'>
            <div className="h-[400px] ml-[10px] mr-[56px]">
                <div className="w-[4px] h-[400px] bg-blue-100 rounded-full relative">
                  <div className="h-[150px] bg-blue-950 rounded-full"></div>
                  <div className="text-blue-200 text-[12px] font-medium leading-normal">
                    <span style={{ opacity: 1 }} className="absolute -top-[20px] -left-[4.5px]">01</span>
                    <span style={{ opacity: 0 }} className="absolute -top-[20px] -left-[4.5px]">02</span>
                    <span style={{ opacity: 0 }} className="absolute -top-[20px] -left-[4.5px]">03</span>
                  </div>
                </div>
              </div>
              <div className='w-[50%] mr-10'>
                  <h1 className='font-extrabold text-[1.5rem] text-gray-950'>1. Connect with Datasources</h1>
                  <p className='mb-8 text-gray-300'>Load files, PDFs, websites, videos, audio files, data,
                  and code-bases as inputs your pipeline.</p>
                  <h1 className='font-extrabold text-[1.5rem] text-gray-950'>2. Utilize pre-built pipelines from our marketplace</h1>
                  <p className='mb-8 text-gray-300'>Save time by leveraging a library of pre-built pipelines such as for chatbots and document search. Contribute to the marketplace by sharing your pipelines with other users!</p>
                  <h1 className='font-extrabold text-[1.5rem] text-gray-950'>3. Deploy to your end users immediately</h1>
                  <p className='mb-8 text-gray-300'>Deploy your applications with an API. End users will be able to view your applications instantly.</p>
              </div>
              <div className='w-[50%]'>
              <Image
                  src="/images/vs-pipeline1.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
              />
              <Image
                  src="/images/vs-pipeline2.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
              />
              </div>
            </div>
          </div>
    )
}

export default BuildSteps;