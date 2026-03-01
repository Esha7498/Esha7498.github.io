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

const dliTrainings = [
  {
    title: 'Fundamentals of Accelerated Computing with CUDA Python',
    bullets: [
      'Learned GPU acceleration fundamentals using CUDA Python (kernels, threads/blocks, and memory concepts).',
      'Practiced accelerating Python workloads by moving compute-intensive sections onto the GPU.',
      'Built performance intuition around parallelism, memory access patterns, and profiling-driven optimization.'
    ],
    tags: ['CUDA Python', 'GPU', 'Parallel Computing', 'Performance']
  },
  {
    title: 'Accelerate Data Science Workflows with Zero Code Changes',
    bullets: [
      'Explored approaches to speed up existing data science pipelines with minimal/no changes to core code.',
      'Learned how GPU-accelerated backends can accelerate dataframe and ML workloads while preserving familiar APIs.',
      'Compared runtime before/after acceleration and identified best-fit workflows for GPU speedups.'
    ],
    tags: ['GPU Acceleration', 'Data Science', 'Performance', 'Workflows']
  },
  {
    title: 'Accelerating End-to-End Data Science Workflows',
    bullets: [
      'Covered end-to-end workflow optimization from data prep → training → evaluation using accelerated tooling.',
      'Studied practical optimization levers (batching, data loading, compute vs. memory bottlenecks).',
      'Emphasized reproducible pipelines and measurement-driven improvements.'
    ],
    tags: ['End-to-End Pipelines', 'GPU', 'Optimization', 'Reproducibility']
  },
  {
    title: 'Generative & Agentic AI Explained',
    bullets: [
      'Studied foundations of generative AI (LLMs, embeddings) and how agentic systems plan and use tools.',
      'Reviewed patterns like RAG, tool calling, and workflow orchestration, plus evaluation basics.',
      'Covered practical risks and reliability considerations (hallucinations, bias, and responsible use).'
    ],
    tags: ['GenAI', 'Agentic AI', 'LLMs', 'RAG']
  },
  {
    title: 'Build Deep Research Agent',
    bullets: [
      'Learned agent workflows for breaking down complex questions into research sub-tasks.',
      'Explored search → synthesis → structured reporting patterns with iterative refinement.',
      'Focused on producing verifiable outputs with traceability and clear reasoning.'
    ],
    tags: ['Agents', 'Research', 'Tool Use', 'Evaluation']
  },
  {
    title: 'Intro to Multi-Modal Data Curation',
    bullets: [
      'Covered principles for curating multi-modal datasets (text, image, tabular, and other modalities).',
      'Learned strategies for labeling, quality checks, deduplication, balancing, and bias detection.',
      'Emphasized dataset documentation to support reliable training and evaluation.'
    ],
    tags: ['Multi-Modal', 'Data Curation', 'Quality', 'Bias']
  }
];

export function MainContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
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

        {/* Right Column (Education) */}
        <div className="space-y-8">
          <div className="space-y-4 pt-4 border-t border-gray-200">
            <h3 className="text-2xl">EDUCATION</h3>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="space-y-6">
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
          </div>
        </div>

        {/* ✅ Full-width Trainings row (spans both columns) */}
        <div className="lg:col-span-2">
          <div className="mt-2 pt-6 border-t border-gray-200">
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <h3 className="text-2xl">TRAININGS</h3>
                <p className="text-gray-600 mt-2">
                  <span className="font-medium text-gray-800">
                    NVIDIA Deep Learning Institute (DLI)
                  </span>
                  <span className="text-gray-500"> </span>
                </p>
              </div>
            </div>

            {/* Cards like Skills + dropdown */}
            <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {dliTrainings.map((t, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={t.title}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full text-left p-5 hover:bg-gray-50 transition"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-gray-900">{t.title}</p>
                          <p className="text-sm text-gray-500 mt-1">Click to view details</p>
                        </div>

                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {t.tags.slice(0, 5).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5">
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
            </div>

            {/* Projects hint so they know to scroll */}
            <div className="mt-8 text-center">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition"
              >
                Scroll down to view Projects ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
