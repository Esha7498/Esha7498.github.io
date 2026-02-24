import { ExternalLink, Github, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useMemo, useState } from 'react';

const projects = [

    {
    id: 1,
    title: 'Drowsiness.TV (Driver Drowsiness Detection)',
    description:
      'Computer vision pipeline to detect eye-state/drowsiness using a CNN, integrated into an app workflow (team project). Focused on real-time inference and practical UX.',
    tags: ['Python', 'Computer Vision', 'CNN', 'React'],
    image:
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/Esha7498/drowsiness-tv-extension.git',
    demo: '',
    slides: ''
  },
  {
    id: 2,
    title: 'SBA Loan Insights Dashboard (R Shiny)',
    description:
      'Interactive R Shiny dashboard analyzing U.S. SBA 7(a) loans (FY2020–Present) across states, industries, and business types, with maps and trend insights.',
    tags: ['R', 'Shiny', 'Data Visualization', 'EDA'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/Esha7498/SBA-Loan-Insights-R_Shiny-Dashboard.git',
    demo: 'https://fpqndl-esha-teware.shinyapps.io/SBA-Loan-Insights-R_Shiny-Dashboard/', // ✅ only this one has demo
    slides: '' // optional
  },
  {
    id: 3,
    title: 'Bank Marketing Success Prediction (Portuguese Bank)',
    description:
      'Predictive modeling project on Portuguese bank telemarketing data using regularized logistic regression and ML models to forecast subscription outcomes and compare performance.',
    tags: ['R', 'Machine Learning', 'Logistic Regression', 'Model Evaluation'],
    image:
      'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/Esha7498/Portuguese_Bank_Marketing_Analysis.git',
    demo: '',
    slides: '' // ✅ PPT/PDF link
  }
];

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = useMemo(() => {
    const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
    return ['All', ...allTags.sort((a, b) => a.localeCompare(b))];
  }, []);

  const filteredProjects =
    selectedFilter === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(selectedFilter));

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <h2 className="text-3xl">PROJECTS</h2>

        <div className="min-w-[220px]">
          <label className="block text-xs text-gray-500 mb-1">Filter by</label>
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm text-gray-700
                       focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300"
          >
            {filters.map((filter) => (
              <option key={filter} value={filter}>
                {filter}
              </option>
            ))}
          </select>
        </div>
      </div>

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
                <p className="text-gray-600 text-sm">{project.description}</p>

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
                  {project.github?.trim() && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}

                  {/* If demo exists show Live Demo else if slides exists show Slides */}
                  {project.demo?.trim() ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  ) : project.slides?.trim() ? (
                    <a
                      href={project.slides}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition text-sm"
                    >
                      <FileText className="w-4 h-4" />
                      Slides
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredProjects.length === 0 && (
          <div className="text-sm text-gray-500">No projects match this filter.</div>
        )}
      </div>
    </div>
  );
}
