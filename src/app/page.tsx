
import YoutubeEmbed from './components/YoutubeEmbeded'
import UseCases from './components/UseCases';
import BuildSteps from './components/BuildSteps';
import DragDrop from './components/DragDrop';
import Hero from './components/Hero';
import Enterprises from './components/Enterprises';
import CTA from './components/CTA';

export default function Home() {
  const videoId = 'tKhVKJGOqDM';
  return (
    <div>
          <Hero />
          <YoutubeEmbed embedId={videoId} />
          <DragDrop />
          <BuildSteps />
          <UseCases />
          <Enterprises />
          <CTA />
    </div>
  )
}

// tKhVKJGOqDM