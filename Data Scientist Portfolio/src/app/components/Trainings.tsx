import { ExternalLink } from 'lucide-react';

type Training = {
  id: number;
  title: string;
  provider: string;
  date: string;
  bullets: string[];
  credential?: string; // optional
};

const trainings: Training[] = [
  {
    id: 1,
    title: 'Fundamentals of Accelerated Computing with CUDA Python',
    provider: 'NVIDIA Deep Learning Institute (DLI)',
    date: '2026',
    bullets: [
      'Learned GPU acceleration fundamentals using CUDA Python, including kernels, threads/blocks, and memory concepts.',
      'Practiced accelerating Python workloads by moving compute-intensive sections onto the GPU.',
      'Applied performance intuition around parallelism, memory access patterns, and profiling-driven optimization.'
    ],
    credential: ''
  },
  {
    id: 2,
    title: 'Accelerate Data Science Workflows with Zero Code Changes',
    provider: 'NVIDIA Deep Learning Institute (DLI)',
    date: '2026',
    bullets: [
      'Explored approaches to speed up existing data science pipelines with minimal/no changes to core Python code.',
      'Learned how GPU-accelerated backends can improve dataframe and ML workloads while preserving familiar APIs.',
      'Compared runtime and throughput before/after acceleration and identified best-fit workloads.'
    ],
    credential: ''
  },
  {
    id: 3,
    title: 'Accelerating End-to-End Data Science Workflows',
    provider: 'NVIDIA Deep Learning Institute (DLI)',
    date: '2026',
    bullets: [
      'Covered GPU-accelerated, end-to-end data science workflow design from data prep → training → evaluation.',
      'Worked through practical optimization levers (batching, data loading, compute vs. memory bottlenecks).',
      'Emphasized reproducible pipelines and measurement-driven improvements.'
    ],
    credential: ''
  },
  {
    id: 4,
    title: 'Generative & Agentic AI Explained',
    provider: 'NVIDIA Deep Learning Institute (DLI)',
    date: '2026',
    bullets: [
      'Studied foundations of generative AI (LLMs, embeddings) and how agentic systems plan, use tools, and iterate.',
      'Reviewed common patterns (RAG, tool calling, workflow orchestration) and how to evaluate agent outputs.',
      'Covered practical considerations: hallucinations, safety, reliability, and responsible deployment.'
    ],
    credential: ''
  },
  {
    id: 5,
    title: 'Build Deep Research Agent',
    provider: 'NVIDIA Deep Learning Institute (DLI)',
    date: '2026',
    bullets: [
      'Learned how research-style agents can break down complex questions into sub-tasks and synthesize findings.',
      'Explored workflows for search, summarization, citation management, and iterative refinement.',
      'Focused on producing structured, verifiable outputs with clear reasoning and traceability.'
    ],
    credential: ''
  },
  {
    id: 6,
    title: 'Intro to Multi-Modal Data Curation',
    provider: 'NVIDIA Deep Learning Institute (DLI)',
    date: '2026',
    bullets: [
      'Covered core principles for curating multi-modal datasets (text, image, tabular, and other modalities).',
      'Learned strategies for labeling, quality checks, deduplication, balancing, and bias detection.',
      'Emphasized dataset documentation and governance to support reliable model training and evaluation.'
    ],
    credential: ''
  }
];

export function Trainings() {
  return (
    <section id="trainings" className="space-y-6 scroll-mt-24">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <h2 className="text-3xl">TRAININGS</h2>
      </div>

      <div className="space-y-4">
        {trainings.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h3 className="text-xl">{t.title}</h3>
                <p className="text-sm text-gray-600">
                  {t.provider} • {t.date}
                </p>
              </div>

              {t.credential?.trim() ? (
                <a
                  href={t.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  Credential
                </a>
              ) : null}
            </div>

            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-gray-700">
              {t.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
