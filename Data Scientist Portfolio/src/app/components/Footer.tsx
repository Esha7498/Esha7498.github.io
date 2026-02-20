import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand / Summary */}
          <div>
            <h3 className="text-2xl mb-4">
              ET<span className="text-blue-400">.</span>
            </h3>
            <p className="text-gray-400">
              M.S. Data Science candidate (American University, May 2026) building ML/NLP,
              analytics, and dashboard solutions to turn data into decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#skills" className="block text-gray-400 hover:text-white transition">Skills</a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition">Projects</a>
              <a href="#experience" className="block text-gray-400 hover:text-white transition">Experience</a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Esha7498"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/e-teware/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:eshateware44@gmail.com"
                className="text-gray-400 hover:text-white transition"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-4 text-gray-400 text-sm">
              <div>Washington, D.C.</div>
              <a className="hover:text-white transition" href="mailto:eshateware44@gmail.com">
                eshateware44@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Esha Teware. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
