import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Data Analyst',
    organization: 'Perry International Inc.',
    location: 'New York, NY, USA',
    period: 'Feb 2024 - Jan 2025',
    bullets: [
      'Supported a financial reallocation project by analyzing cross-market KPIs (churn rate, seasonality-adjusted capital efficiency) using regression and Python data manipulation; delivered insights that drove a 15% reduction in digital footprint costs.',
      'Built and validated demand-forecast models (MAPE < 17%) to inform inventory and media-buy schedules, reducing stock-outs by 10%.',
      'Partnered with cross-functional teams to define ELT pipelines and optimized Tableau dashboards using custom queries and automated data extracts.'
    ],
    tags: ['Python', 'Regression', 'Forecasting', 'Pandas', 'SQL', 'Tableau', 'ELT']
  },
  {
    title: 'Data Scientist (FP&A)',
    organization: 'Koch Industries',
    location: 'Auburn Hills, MI, USA',
    period: 'May 2023 - Feb 2024',
    bullets: [
      'Designed modular Python ETL pipelines using pandas and NumPy for Guardian Glass production data, standardizing analytics across five North America plants and reducing data-prep time by 40%.',
      'Built Dockerized analytics workflows and Snowflake-connected R Shiny dashboards delivering real-time KPIs to engineering and finance teams, eliminating manual refresh cycles.',
      'Implemented statistical anomaly detection on energy-usage streams; insights drove process adjustments that reduced utility expenses by 4%.'
    ],
    tags: ['Python', 'ETL', 'Pandas', 'NumPy', 'Docker', 'Snowflake', 'R Shiny', 'Anomaly Detection']
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-4xl mb-4">PROFESSIONAL EXPERIENCE</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience delivering analytics, forecasting, and data products across finance and operations.
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
                    <p className="text-blue-600">
                      {exp.organization}{' '}
                      <span className="text-gray-500">• {exp.location}</span>
                    </p>
                    <span className="text-gray-500 text-sm">{exp.period}</span>
                  </div>

                  <ul className="text-gray-600 mb-4 list-disc pl-5 space-y-2">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>

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
