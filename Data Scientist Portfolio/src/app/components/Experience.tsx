import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Data Scientist',
    organization: 'TechCorp Solutions',
    period: '2022 - Present',
    description: 'Leading a team of data scientists in developing predictive models for customer behavior analysis. Implemented MLOps practices and reduced model deployment time by 60%.',
    tags: ['Python', 'SQL', 'Machine Learning', 'GCP', 'NLP', 'Linear Programming']
  },
  {
    title: 'Data Scientist',
    organization: 'Analytics Innovations Inc.',
    period: 'Aug - Dec 2022',
    description: 'Built machine learning pipelines for fraud detection and customer segmentation. Collaborated with cross-functional teams to drive data-driven decision making.',
    tags: ['Python', 'TensorFlow', 'AWS', 'Pandas']
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl mb-4">EXPERIENCE</h2>
          <p className="text-gray-600 max-w-2xl">
            Professional journey in data science and machine learning.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="flex gap-4 pb-8 border-b border-gray-200 last:border-b-0 last:pb-0"
              >
                <div className="flex-shrink-0">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="mb-2">
                    <h3 className="text-xl">{exp.title}</h3>
                    <p className="text-blue-600">{exp.organization}</p>
                    <span className="text-gray-500 text-sm">{exp.period}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}