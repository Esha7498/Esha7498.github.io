import { Github, Linkedin, Mail, MapPin, Download, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Projects } from './Projects';

export function MainContent() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Profile Section */}
          <div className="space-y-6">
            <div className="w-48 h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758626099012-2904337e9c60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMHdvcmtzcGFjZSUyMGxhcHRvcHxlbnwxfHx8fDE3NzE1NDg3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-4xl font-semibold tracking-tight">Esha Teware</h1>
              <h2 className="text-2xl text-gray-600">Data Scientist</h2>
              
            </div>
            
            <p className="text-gray-600">
              Transforming complex data into actionable insights through machine learning, 
              statistical analysis, and compelling visualizations. Passionate about solving 
              real-world problems with data-driven solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
              <a 
                href="https://github.com/Esha7498" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/e-teware/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="/resume.pdf" 
                download
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
              >
                <Download className="w-5 h-5" />
                <span>Resume</span>
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <h3 className="text-xl">CONTACT</h3>
              <a href="mailto:eshateware44@gmail.com" className="text-blue-600 hover:underline block">
                eshateware44@gmail.com
              </a>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Washington, DC</span>
              </div>
            </div>
          </div>
          
          {/* Education */}
          <div className="space-y-4 pt-4 border-t border-gray-200">
            <h3 className="text-2xl">EDUCATION</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg">M.S. in Data Science</h4>
                    <p className="text-gray-600">American University</p>
                    <p className="text-sm text-gray-500">Jan 2025 – May 2026</p>
                    <p className="text-sm text-gray-600 mt-1">GPA: 3.92/4.0</p>
                    <p className="text-sm text-gray-600 mt-2">Specialized in machine learning and statistical modeling.</p>
                    {/* Add your subjects and awards as bullet points here */}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg">B.S. in Data Science</h4>
                    <p className="text-gray-600">The Pennsylvania State University</p>
                    <p className="text-sm text-gray-500">Aug 2018 – May 2023</p>
                    <p className="text-sm text-gray-600 mt-1">GPA: 3.52/4.0</p>
                    <p className="text-sm text-gray-600 mt-2">Focus on algorithms and artificial intelligence.</p>
                    {/* Add your subjects and awards as bullet points here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-12">
          {/* Projects Section */}
          <div id="projects">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}
