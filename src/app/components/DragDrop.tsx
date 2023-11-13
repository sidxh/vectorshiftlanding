"use client"

import React, {useRef} from 'react'
import {motion} from 'framer-motion'

const DragDrop = ()  => {
    const parentRef = useRef<HTMLDivElement>(null);
    return (
        <div className='px-[1rem] sm:px-0'>
        <h1 className='text-center text-[2rem] font-bold mt-[15rem] sm:text-[3rem]'>Drag and Drop Application Builder</h1>
        <p className='mx-auto text-center text-[1rem] text-gray-300 mb-8'>Seriously just drag any of the block and customize the flow of your application and their connections, go on, drag them!</p>
        <div className=' bg-gray-800 border-4 border-black my-10 w-full flex items-center py-[1rem] rounded-2xl'>
        <div className="flex gap-[1.5rem] items-center mx-auto flex-col sm:flex-row sm:gap-[4rem]" ref={parentRef}>
            <div className='flex gap-[1.5rem] flex-row sm:flex-col sm:gap-20'>
            <motion.div className="w-[150px] bg-gray-300 border-2 border-purple-400 rounded-md h-full sm:w-[200px]" 
                drag
                dragConstraints={parentRef}
                dragSnapToOrigin={true}>
                    <div className='w-full bg-[#6466F1] p-2'>Chat Memory</div>
                    <div className='w-full bg-white p-6 text-black rounded-md'>
                        <p className='text-xs font-bold'>Type</p>
                        <p className='text-sm '>Full-Formatted</p>
                    </div>               
            </motion.div>
            <motion.div className="w-[150px] bg-gray-300 border-2 border-purple-400 rounded-md h-full sm:w-[200px]"
                drag
                dragConstraints={parentRef}
                dragSnapToOrigin={true}>
                    <div className='w-full bg-[#6466F1] p-2'>Input</div>
                    <div className='w-full bg-white h-full p-6 text-black rounded-md'>
                        <p className='text-xs font-bold'>Name</p>
                        <p className='text-sm'>input_2</p>
                        <p className='text-xs font-bold mt-4'>Type</p>
                        <p className='text-sm'>Text</p>
                    </div>               
            </motion.div>
            </div>

            <div className='flex gap-[1rem] flex-row sm:flex-col sm:gap-20'>
            <motion.div className="w-[150px] bg-gray-300 border-2 border-purple-400 rounded-md h-full sm:w-[200px]"
                drag
                dragConstraints={parentRef}
                dragSnapToOrigin={true}>
                    <div className='w-full bg-[#6466F1] p-2'>Text</div>
                    <div className='w-full bg-white h-full p-6 text-black rounded-md'>
                        <p className='text-xs font-bold'>Text</p>
                        <p className='text-sm'>You are a chatbot that answers questions about VectorShift based on Context</p>
                    </div>               
            </motion.div>
            <motion.div className="w-[150px] bg-gray-300 border-2 border-purple-400 rounded-md h-full sm:w-[200px]"
                drag
                dragConstraints={parentRef}
                dragSnapToOrigin={true}>
                    <div className='w-full bg-[#6466F1] p-2'>Text</div>
                    <div className='w-full bg-white h-full p-6 text-black rounded-md'>
                        <p className='text-xs font-bold'>Text</p>
                        <p className='text-sm font-bold'>Conversation History:</p>
                        <p className='text-sm'>(History)</p>
                        <p className='text-sm font-bold mt-4'>Question:</p>
                        <p className='text-sm'>(Question)</p>

                    </div>               
            </motion.div>
            </div>
            <motion.div className="w-[250px] bg-gray-300 border-2 border-purple-400 rounded-md h-full sm:w-[200px]"
                drag
                dragConstraints={parentRef}
                dragSnapToOrigin={true}>
                    <div className='w-full bg-[#6466F1] p-2'>OpenAI LLM</div>
                    <div className='w-full bg-white h-full p-6 text-black rounded-md'>
                        <p className='text-sm font-bold'>Model</p>
                        <p className='text-sm font-bold'>gpt-3.5-turbo</p>
                        <p className='text-xs text-gray-800 my-4 '>Describe the AI&apos;s role in &quot;system&quot;. Enter your prompt into &quot;prompt1&quot;</p>
                        <p className='text-sm font-bold'>Use Personal API Key</p>                        
                    </div>               
            </motion.div>
            <motion.div className="w-[250px] bg-gray-300 border-2 border-purple-400 rounded-md h-full sm:w-[200px]"
                drag
                dragConstraints={parentRef}
                dragSnapToOrigin={true}>
                    <div className='w-full bg-[#6466F1] p-2'>Output</div>
                    <div className='w-full bg-white h-full p-6 text-black rounded-md'>
                        <p className='text-xs font-bold'>Name</p>
                        <p className='text-sm'>output_1</p>
                        <p className='text-xs font-bold mt-4'>Type</p>
                        <p className='text-sm'>text</p>
                    </div>               
            </motion.div>

        </div>
    </div>
    </div>
    )
}

export default DragDrop;