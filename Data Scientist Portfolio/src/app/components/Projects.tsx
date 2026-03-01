import { ExternalLink, Github, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useMemo, useState } from 'react';

// ... keep your projects array as-is above

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
        {/* Header like Experience */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl mb-4">PROJECTS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of projects highlighting Python, machine learning, and end-to-end analytics work.
          </p>
        </div>

        {/* White container like Experience */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
            {/* Filter */}
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

          <div className="space-y-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition group"
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
      </div>
    </section>
  );
}
