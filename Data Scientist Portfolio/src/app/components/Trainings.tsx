import { GraduationCap } from 'lucide-react';

const trainings = [
  {
    title: 'Fundamentals of Accelerated Computing with CUDA Python',
    organization: 'NVIDIA Deep Learning Institute (DLI)',

    bullets: [
      'Learned GPU acceleration fundamentals using CUDA Python (kernels, threads/blocks, and memory concepts).',
      'Practiced accelerating Python workloads by moving compute-intensive sections onto the GPU.',
      'Built performance intuition around parallelism, memory access patterns, and profiling-driven optimization.'
    ],
    tags: ['CUDA Python', 'GPU', 'Parallel Computing', 'Performance']
  },
  {
    title: 'Accelerate Data Science Workflows with Zero Code Changes',
    organization: 'NVIDIA Deep Learning Institute (DLI)',

    bullets: [
      'Explored approaches to speed up existing data science pipelines with minimal/no changes to core code.',
      'Learned how GPU-accelerated backends can accelerate dataframe and ML workloads while preserving familiar APIs.',
      'Compared runtime before/after acceleration and identified best-fit workflows for GPU speedups.'
    ],
    tags: ['GPU Acceleration', 'Data Science', 'Performance', 'Workflows']
  },
  {
    title: 'Accelerating End-to-End Data Science Workflows',
    organization: 'NVIDIA Deep Learning Institute (DLI)',

    bullets: [
      'Covered end-to-end workflow optimization from data prep → training → evaluation using accelerated tooling.',
      'Studied practical optimization levers (batching, data loading, compute vs. memory bottlenecks).',
      'Emphasized reproducible pipelines and measurement-driven improvements.'
    ],
    tags: ['End-to-End Pipelines', 'GPU', 'Optimization', 'Reproducibility']
  },
  {
    title: 'Generative & Agentic AI Explained',
    organization: 'NVIDIA Deep Learning Institute (DLI)',

    bullets: [
      'Studied foundations of generative AI (LLMs, embeddings) and how agentic systems plan and use tools.',
      'Reviewed patterns like RAG, tool calling, and workflow orchestration, plus evaluation basics.',
      'Covered practical risks and reliability considerations (hallucinations, bias, and responsible use).'
    ],
    tags: ['GenAI', 'Agentic AI', 'LLMs', 'RAG']
  },
  {
    title: 'Build Deep Research Agent',
    organization: 'NVIDIA Deep Learning Institute (DLI)',

    bullets: [
      'Learned agent workflows for breaking down complex questions into research sub-tasks.',
      'Explored search → synthesis → structured reporting patterns with iterative refinement.',
      'Focused on producing verifiable outputs with traceability and clear reasoning.'
    ],
    tags: ['Agents', 'Research', 'Tool Use', 'Evaluation']
  },
  {
    title: 'Intro to Multi-Modal Data Curation',
    organization: 'NVIDIA Deep Learning Institute (DLI)',

    bullets: [
      'Covered principles for curating multi-modal datasets (text, image, tabular, and other modalities).',
      'Learned strategies for labeling, quality checks, deduplication, balancing, and bias detection.',
      'Emphasized dataset documentation to support reliable training and evaluation.'
    ],
    tags: ['Multi-Modal', 'Data Curation', 'Quality', 'Bias']
  }
];

export function Trainings() {
  return (
    <section id="trainings" className="pt-15 pb-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-4xl mb-4">TRAININGS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            NVIDIA Deep Learning Institute coursework focused on GPU acceleration, CUDA Python, and modern AI workflows.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="space-y-8">
            {trainings.map((t, index) => (
              <div
                key={index}
                className="flex gap-4 pb-8 border-b border-gray-200 last:border-b-0 last:pb-0"
              >
                <div className="flex-shrink-0">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-2">
                    <h3 className="text-xl">{t.title}</h3>
                    <p className="text-blue-600">
                      {t.organization}{' '}
                      <span className="text-gray-500">• {t.location}</span>
                    </p>
                    <span className="text-gray-500 text-sm">{t.period}</span>
                  </div>

                  <ul className="text-gray-600 mb-4 list-disc pl-5 space-y-2">
                    {t.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {t.tags.map((tag, i) => (
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
