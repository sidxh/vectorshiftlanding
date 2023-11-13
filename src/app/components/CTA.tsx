const CTA = () => {
    return(
      <div className='my-[10rem] mt-[10rem] px-[1rem] sm:px-0'>
        <h1 className='text-center text-[2rem] font-bold mt-24 mb-4 hidden sm:block'>Try our platform for free</h1>
        <h1 className='text-center text-[2rem] font-bold mt-24 mb-4 sm:hidden'>Try Our Platform</h1>
        <div className='flex my-10 gap-4 justify-center'>
          <button className='px-4 py-2 bg-white text-black font-semibold rounded-md text-[1.2rem]'>Get Started</button>
          <button className='px-4 py-2 bg-black text-white font-semibold rounded-md text-[1.2rem] border-white border-2'>Talk to us</button>
        </div>
      </div>
    )
}

export default CTA;