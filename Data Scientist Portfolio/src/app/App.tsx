import { Navigation } from './components/Navigation';
import { MainContent } from './components/MainContent';
import { Experience } from './components/Experience';
import { Trainings } from './components/Trainings';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div id="home" className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <MainContent />
        <Experience />
        <Trainings />
        <Skills />
        
        
      </div>
      <Footer />
    </div>
  );
}
