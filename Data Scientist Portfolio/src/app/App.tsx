// src/App.tsx (or your main page file)
import { Navigation } from './components/Navigation';
import { MainContent } from './components/MainContent';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Navigation />

      <div id="home" className="pt-20">
        <MainContent />
      </div>
      <Projects />
      <Experience />
       <Skills />

      {/* Contact info lives here */}
      <Footer />
    </>
  );
}
