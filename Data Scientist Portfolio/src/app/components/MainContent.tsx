// src/components/MainContent.tsx
import { Github, Linkedin, Download, GraduationCap, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
                src="/profile.JPG"
                alt="Esha Teware"
                className="w-full h-full object-cover object-center"
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
            <div className="flex flex-row flex-wrap items-center gap-4 pt-4 border-t border-gray-200">
              <a
                href="https://github.com/Esha7498"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-700
                           hover:text-blue-600 hover:border-blue-200 hover:bg-gray-50 transition"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/e-teware/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-700
                           hover:text-blue-600 hover:border-blue-200 hover:bg-gray-50 transition"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>

              {/* View Resume */}
              <a
                href="/e_teware_R.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-700
                           hover:text-blue-600 hover:border-blue-200 hover:bg-gray-50 transition"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Resume</span>
              </a>

              {/* Download Resume */}
              <a
                href="/e_teware_R.pdf"
                download
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-700
                           hover:text-blue-600 hover:border-blue-200 hover:bg-gray-50 transition"
              >
                <Download className="w-5 h-5" />
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column (Education moved here) */}
        <div className="space-y-8">
          <div className="space-y-4 pt-4 border-t border-gray-200">
            <h3 className="text-2xl">EDUCATION</h3>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="space-y-6">
                {/* MS */}
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg">M.S. in Data Science</h4>
                    <p className="text-gray-600">American University</p>
                    <p className="text-sm text-gray-500">Jan 2025 – May 2026</p>
                    <p className="text-sm text-gray-600 mt-1">GPA: 3.92/4.0</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Specialized in machine learning and statistical modeling.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200" />

                {/* BS */}
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg">B.S. in Data Science</h4>
                    <p className="text-gray-600">The Pennsylvania State University</p>
                    <p className="text-sm text-gray-500">Aug 2018 – May 2023</p>
                    <p className="text-sm text-gray-600 mt-1">GPA: 3.52/4.0</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Focus on algorithms and artificial intelligence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* If you still want email/location, add a small line here (optional) */}
          </div>
        </div>
      </div>
    </div>
  );
}
