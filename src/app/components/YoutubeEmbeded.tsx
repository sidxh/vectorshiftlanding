import React from 'react';

interface YoutubeEmbedProps {
  embedId: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ embedId }) => {
  return (
    <div className='px-[1rem] sm:px-0'>
    <h1 className='text-center text-[2rem] font-bold mt-[10rem] mb-[2rem] sm:text-[3rem]'>Demo of Our Platform</h1>
    <div className='video-responsive'>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
  );
};

export default YoutubeEmbed;
