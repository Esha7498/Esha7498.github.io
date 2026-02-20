import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl mb-4">
              AM<span className="text-blue-400">.</span>
            </h3>
            <p className="text-gray-400">
              Data Scientist passionate about transforming data into actionable insights.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#skills" className="block text-gray-400 hover:text-white transition">Skills</a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition">Projects</a>
              <a href="#experience" className="block text-gray-400 hover:text-white transition">Experience</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:alex.morgan@email.com" className="text-gray-400 hover:text-white transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Alex Morgan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
