import { Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Get In Touch</h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
            <h4 className="text-xl mb-3">Open to Opportunities</h4>
            <p className="text-gray-600 mb-4">
              Currently available for freelance projects and consulting opportunities 
              in data science, machine learning, and AI.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white rounded-full text-sm">Freelance</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm">Consulting</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm">Speaking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}