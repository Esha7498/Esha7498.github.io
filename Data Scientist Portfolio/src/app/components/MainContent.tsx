// src/components/MainContent.tsx
import { useState } from 'react';
import {
  Github,
  Linkedin,
  Download,
  GraduationCap,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

/**
 * Keep trainings here (Home page only).
 * Shows only titles by default; click to expand details.
 */
const dliTrainings = [
  {
    title: 'Fundamentals of Accelerated Computing with CUDA Python',
    bullets: [
      'Learned GPU acceleration fundamentals using CUDA Python (kernels, threads/blocks, and memory concepts).',
      'Practiced accelerating Python workloads by moving compute-intensive sections onto the GPU.',
      'Built performance intuition around parallelism, memory access patterns, and profiling-driven optimization.'
    ]
  },
  {
    title: 'Accelerate Data Science Workflows with Zero Code Changes',
    bullets: [
      'Explored approaches to speed up existing data science pipelines with minimal/no changes to core code.',
      'Learned how GPU-accelerated backends can accelerate dataframe and ML workloads while preserving familiar APIs.',
      'Compared runtime before/after acceleration and identified best-fit workflows for GPU speedups.'
    ]
  },
  {
    title: 'Accelerating End-to-End Data Science Workflows',
    bullets: [
      'Covered end-to-end workflow optimization from data prep → training → evaluation using accelerated tooling.',
      'Studied practical optimization levers (batching, data loading, compute vs. memory bottlenecks).',
      'Emphasized reproducible pipelines and measurement-driven improvements.'
    ]
  },
  {
    title: 'Generative & Agentic AI Explained',
    bullets: [
      'Studied foundations of generative AI (LLMs, embeddings) and how agentic systems plan and use tools.',
      'Reviewed patterns like RAG, tool calling, and workflow orchestration, plus evaluation basics.',
      'Covered practical risks and reliability considerations (hallucinations, bias, and responsible use).'
    ]
  },
  {
    title: 'Build Deep Research Agent',
    bullets: [
      'Learned agent workflows for breaking down complex questions into research sub-tasks.',
      'Explored search → synthesis → structured reporting patterns with iterative refinement.',
      'Focused on producing verifiable outputs with traceability and clear reasoning.'
    ]
  },
  {
    title: 'Intro to Multi-Modal Data Curation',
    bullets: [
      'Covered principles for curating multi-modal datasets (text, image, tabular, and other modalities).',
      'Learned strategies for labeling, quality checks, deduplication, balancing, and bias detection.',
      'Emphasized dataset documentation to support reliable training and evaluation.'
    ]
  }
];

export function MainContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Show first 3 trainings by default (like the mock), reveal all on click
  const [showAllTrainings, setShowAllTrainings] = useState(false);
  const visibleTrainings = showAllTrainings ? dliTrainings : dliTrainings.slice(0, 3);
  const hiddenCount = dliTrainings.length - visibleTrainings.length;

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* LEFT: Hero */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="w-72 h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
              <ImageWithFallback
                src="/profile.JPG"
                alt="Esha Teware"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="space-y-2">
              <h1 className="text-5xl font-semibold tracking-tight">Esha Teware</h1>
              <h2 className="text-2xl text-gray-600">Data Scientist</h2>
            </div>

            <p className="text-gray-600 max-w-xl">
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
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700
                           hover:text-blue-600 hover:border-blue-200 hover:bg-gray-50 transition"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/e-teware/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700
                           hover:text-blue-600 hover:border-blue-200 hover:bg-gray-50 transition"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>

              <a
                href="/e_teware_R.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700
                           hover:text-blue-600 hover:border-blue-200 hover:bg-gray-50 transition"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Resume</span>
              </a>

              <a
                href="/e_teware_R.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700
                           hover:text-blue-600 hover:border-blue-200 hover:bg-gray-50 transition"
              >
                <Download className="w-5 h-5" />
                <span>Download</span>
              </a>
            </div>

            {/* Intentionally keep this area empty for your future Highlights section */}
            <div className="h-24" />
          </div>
        </div>

        {/* RIGHT: Education + Trainings cards */}
        <div className="space-y-8">
          {/* Education */}
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-4xl font-semibold">Education</h3>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="space-y-8">
                {/* MS */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>

                  <div>
                    <h4 className="text-xl font-medium">M.S. in Data Science</h4>
                    <p className="text-gray-700">American University</p>
                    <p className="text-sm text-gray-500">Jan 2025 – May 2026</p>
                    <p className="text-sm text-gray-600 mt-2">GPA: 3.92/4.0</p>
                    <p className="text-sm text-gray-600 mt-3">
                      Specialized in machine learning and statistical modeling.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200" />

                {/* BS */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>

                  <div>
                    <h4 className="text-xl font-medium">B.S. in Data Science</h4>
                    <p className="text-gray-700">The Pennsylvania State University</p>
                    <p className="text-sm text-gray-500">Aug 2018 – May 2023</p>
                    <p className="text-sm text-gray-600 mt-2">GPA: 3.52/4.0</p>
                    <p className="text-sm text-gray-600 mt-3">
                      Focus on algorithms and artificial intelligence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trainings */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-8 py-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Trainings</h3>
                    <p className="text-gray-600 mt-1">
                      NVIDIA Deep Learning Institute (DLI)
                    </p>
                  </div>
                </div>
              </div>

              <div>
                {visibleTrainings.map((t, idx) => {
                  const isOpen = openIndex === idx;

                  return (
                    <div key={t.title} className="border-b border-gray-200 last:border-b-0">
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between gap-4 px-8 py-5 text-left hover:bg-gray-50 transition"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <GraduationCap className="w-5 h-5 text-blue-600" />
                          </div>
                          <p className="text-gray-900">{t.title}</p>
                        </div>

                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-8 pb-6">
                          <ul className="text-gray-600 list-disc pl-5 space-y-2 text-sm">
                            {t.bullets.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* "+ X more" like the mock */}
                {!showAllTrainings && hiddenCount > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowAllTrainings(true)}
                    className="w-full text-left px-8 py-4 text-blue-600 hover:underline text-sm"
                  >
                    + {hiddenCount} more
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
