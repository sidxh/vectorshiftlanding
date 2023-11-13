
import UseCards from "./UseCards";

const UseCases = () => {
    return(
        <div className='px-[1rem] sm:px-0'>
        <h1 className='text-center text-[2rem] font-bold mt-[10rem] sm:text-[3rem]'>Use Cases</h1>
        <div className='flex justify-between my-12 mb-8 flex-col sm:flex-row gap-6 sm:gap-0'>
          <UseCards title='Chat Bots' image='chatbot2' description='Build and embed into your website in minutes. Connect chat bot with your knowledge base.' />
          <UseCards title='Search Engines' image='search-engine2' description='Summarize and answer questions about documents, videos, audio files, and websites instantly.'/>
          <UseCards title='Document Creation' image='documentation2' description='Create marketing copy, personalized outbound emails, call summaries, and graphics at scale.'/>  
        </div>     
      </div>
    )
}

export default UseCases;