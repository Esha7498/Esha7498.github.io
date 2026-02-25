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
    title: 'Generative AI Explained',
    provider: 'NVIDIA Deep Learning Institute (DLI)',
    date: '2026',
    bullets: [
      'Learned core GenAI concepts (LLMs, transformers, embeddings) and how modern generative systems work.',
      'Reviewed common GenAI applications (assistants, content generation, search/RAG) and evaluation basics.',
      'Studied practical considerations: data quality, bias, hallucinations, and responsible use.'
    ],
    credential: '' // paste link if you have one
  }

  // ✅ Add more trainings like this:
  // {
  //   id: 2,
  //   title: '...',
  //   provider: '...',
  //   date: '...',
  //   bullets: ['...', '...'],
  //   credential: '...'
  // }
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
