import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-blue-600">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl">Esha Teware</h1>
            <h2 className="text-3xl md:text-4xl text-gray-600">Data Scientist</h2>
          </div>
          
          <p className="text-lg text-gray-600 max-w-lg">
            Transforming complex data into actionable insights through machine learning, 
            statistical analysis, and compelling visualizations. Passionate about solving 
            real-world problems with data-driven solutions.
          </p>
          
          <div className="flex gap-4 flex-wrap">
            <a 
              href="#projects"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>
            
          </div>
          
          <div className="flex gap-4 pt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:alex.morgan@email.com" className="text-gray-600 hover:text-blue-600 transition">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1758626099012-2904337e9c60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMHdvcmtzcGFjZSUyMGxhcHRvcHxlbnwxfHx8fDE3NzE1NDg3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Data Science Workspace"
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
