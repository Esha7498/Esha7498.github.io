import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Customer Churn Prediction Model',
    description: 'Developed a machine learning model to predict customer churn with 92% accuracy using ensemble methods. Implemented feature engineering and hyperparameter tuning to optimize performance.',
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas'],
    image: 'https://images.unsplash.com/photo-1770681381576-f1fdceb2ea01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0cyUyMGdyYXBoc3xlbnwxfHx8fDE3NzE1NDg3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    id: 2,
    title: 'Real-time Sentiment Analysis Dashboard',
    description: 'Built an interactive dashboard for analyzing social media sentiment in real-time. Integrated NLP techniques and streaming data processing for live insights.',
    tags: ['Python', 'TensorFlow', 'NLTK', 'Dash', 'AWS'],
    image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBzY3JlZW58ZW58MXx8fHwxNzcxNDU3Nzc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    id: 3,
    title: 'Computer Vision for Medical Imaging',
    description: 'Created a deep learning model for detecting anomalies in medical X-ray images with 95% precision. Utilized transfer learning and data augmentation techniques.',
    tags: ['PyTorch', 'Computer Vision', 'CNN', 'OpenCV'],
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc3MTUyMDg5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    github: 'https://github.com',
    demo: 'https://example.com'
  }
];

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  // Get all unique tags from all projects
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  const filters = ['All', ...allTags];
  
  // Filter projects based on selected filter
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedFilter));

  return (
    <div className="space-y-6">
      <h2 className="text-3xl">PROJECTS</h2>
      
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 rounded-lg transition text-sm ${
              selectedFilter === filter
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      
      {/* Scrollable projects container */}
      <div className="max-h-[800px] overflow-y-auto pr-2 space-y-6">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group"
          >
            <div className="grid md:grid-cols-[200px_1fr] gap-4">
              <div className="aspect-video md:aspect-square overflow-hidden bg-gray-100">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              
              <div className="p-6 space-y-3">
                <h3 className="text-xl">{project.title}</h3>
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-2">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}