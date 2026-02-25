import { Code2, Database, LineChart, Brain, Cpu, GitBranch } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming',
    skills: ['Python', 'R', 'SQL']
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    skills: ['Scikit-learn', 'Regression', 'Classification', 'ANOVA', 't-test', 'StatsModels']
  },
  {
    icon: Cpu,
    title: 'Deep Learning',
    skills: ['PyTorch', 'TensorFlow', 'Neural Networks', 'Model Training', 'Evaluation']
  },
  {
    icon: LineChart,
    title: 'Data Visualization',
    skills: ['Matplotlib', 'Plotly', 'ggplot2', 'Tableau', 'Power BI', 'Shiny']
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    skills: ['Pandas', 'NumPy', 'Snowflake', 'Data Cleaning', 'Feature Engineering']
  },
  {
    icon: GitBranch,
    title: 'NLP & Tools',
    skills: ['Text Embeddings', 'Vector Similarity', 'NLP Pipelines', 'Docker', 'Git']
  }
];

export function Skills() {
  return (
    <section id="skills" className="mt-20 py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-4xl mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for end-to-end data science projects, from data collection
            to model development, evaluation, and visualization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
