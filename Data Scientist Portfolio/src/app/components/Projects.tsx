// src/components/Projects.tsx
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
    title: 'DC Cherry Blossom Peak Bloom Predictor (Time-Series ML)',
    description:
      'Time-series ML pipeline to forecast Washington, DC Yoshino peak bloom (DOY) using winter chill, GDD (base 40°F), and winter Niño3.4. Walk-forward TimeSeriesSplit MAE ≈ 4.46 ± 1.28 days; 2026 early forecast (cutoff 2026-02-24): Apr 03, 2026 (DOY 93).',
    tags: ['Python', 'Time Series', 'XGBoost', 'scikit-learn', 'Open-Meteo API', 'SHAP'],
    image: '/bloom.png',
    github: 'https://github.com/Esha7498/dc-cherry-blossom-predictor_2026.git',
    demo: '',
    slides: ''
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
    slides: ''
  },
  {
    id: 4,
    title: 'SBA Loan Insights Dashboard (R Shiny)',
    description:
      'Interactive R Shiny dashboard analyzing U.S. SBA 7(a) loans (FY2020–Present) across states, industries, and business types, with maps and trend insights.',
    tags: ['R', 'Shiny', 'Data Visualization', 'EDA'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/Esha7498/SBA-Loan-Insights-R_Shiny-Dashboard.git',
    demo: 'https://fpqndl-esha-teware.shinyapps.io/SBA-Loan-Insights-R_Shiny-Dashboard/',
    slides: ''
  },
  {
    id: 5,
    title: 'Disaster-Related SBA Loan Approvals (Hierarchical Bayesian / JAGS)',
    description:
      'Applied a hierarchical Bayesian model (MCMC via JAGS) to analyze factors influencing disaster-related small business loan approval rates. Integrated context, imputation, diagnostics, and reproducible reporting via Quarto.',
    tags: ['R', 'Bayesian Modeling', 'JAGS', 'MCMC', 'Quarto'],
    image:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/Esha7498/STAT-618_Project.git',
    demo: '',
    slides: ''
  },
  {
    id: 6,
    title: 'Environmental Attitudes Regression (Reproduction + Extension)',
    description:
      'Reproduced and extended a 2024 PLOS ONE study using TPB (SN, PBC, SCE → EA). Verified reliability, replicated regression results, and added interaction + logistic extensions for high EA.',
    tags: ['R', 'Regression', 'Reproducibility', 'PLOS ONE', 'Research'],
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1080&q=80',
    github: 'https://github.com/Esha7498/environmental-attitudes-regression.git',
    demo: '',
    slides: ''
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
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header (same style as Experience) */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl mb-4">PROJECTS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Selected projects showcasing Python, ML/CV, and end-to-end analytics.
          </p>
        </div>

        {/* Container (white card like Experience/Skills sections) */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          {/* Filter row */}
          <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
            <div className="min-w-[220px] ml-auto">
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

          {/* ✅ Grid cards like Skills */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition bg-white flex flex-col"
              >
                {/* Image */}
                <div className="h-40 bg-gray-100 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg">{project.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.slice(0, 6).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-5 pt-4 border-t border-gray-100">
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

                    {project.demo?.trim() ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
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
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-sm text-gray-500 mt-4">No projects match this filter.</div>
          )}
        </div>
      </div>
    </section>
  );
}
