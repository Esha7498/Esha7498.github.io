// src/App.tsx (or your main page file)
import { Navigation } from './components/Navigation';
import { MainContent } from './components/MainContent';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Trainings } from './components/Trainings';
import { Skills } from './components/Skills';

export default function App() {
  return (
    <>
      <Navigation />
      <div id="home" className="pt-20">
        <MainContent />
      </div>

      {/* Full-width sections in the order you want */}
      
      <Projects />
      <Experience />
      <Skills />
      <Trainings />
    </>
  );
}
