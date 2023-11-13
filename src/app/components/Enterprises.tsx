const Enterprises = () => {
    return(
        <div className='px-[1rem] sm:px-0'>
          <h1 className='text-center text-[2rem] font-bold mt-[15rem] mb-4 sm:text-[3rem]'>For Enterprises</h1>
          <p className='w-[90%] mx-auto text-center text-md text-gray-400 mb-16 hidden sm:block'>Our partnerships begin with a free diagnostic where we assess whether your organization is generative AI ready and we create a roadmap for creating a turn-key solution using our platform to fit into your processes today. Book an intro call today.</p>
          <p className='mx-auto text-center text-[1rem] text-gray-400 mb-8 sm:hidden'>We create a roadmap for creating a turn-key solution using our platform to fit into your processes today. Book an intro call today.</p>
          <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>
                Usecase 1
              </span>
              <span className='text-xl font-semibold'>
              Marketing and Sales
              </span>
              <span className='mt-2 text-zinc-400 text-md'>
              Write proposals, respond to RFPs, scale personalized outbound, update CRM, generate prep research for calls, and draft account plans.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>
                Usecase 2
              </span>
              <span className='text-xl font-semibold'>
              Customer Support
              </span>
              <span className='mt-2 text-zinc-400 text-md'>
              Enterprise-grade customer service chatbots and co-pilots trained on knowledge base to up-skill your support agents.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>
                Usecase 3
              </span>
              <span className='text-xl font-semibold'>
              Internal Support
              </span>
              <span className='mt-2 text-zinc-400  text-md'>
              Answer HR requests and technical support questions and automate reporting. Improve productivity of your team.
              </span>
            </div>
          </li>
        </ol>
        </div>
    )
}

export default Enterprises;