const certCategories = [
  {
    category: 'AI / Machine Learning',
    icon: 'psychology',
    color: '#a78bfa',
    certs: [
      {
        title: 'Google Professional ML Engineer',
        issuer: 'Google Cloud',
        desc: 'Industry mein sabse recognized ML certification — production-grade ML systems design.',
        year: '2024',
      },
      {
        title: 'Machine Learning Specialization',
        issuer: 'DeepLearning.AI + Coursera (Andrew Ng)',
        desc: 'Globally respected ML fundamentals course by Andrew Ng — supervised, unsupervised & reinforcement learning.',
        year: '2024',
      },
      {
        title: 'Hugging Face NLP Course',
        issuer: 'Hugging Face',
        desc: 'LLM jobs ke liye must-have — transformers, fine-tuning, and NLP pipelines.',
        year: '2024',
      },
    ],
  },
  {
    category: 'Data Science / Analytics',
    icon: 'analytics',
    color: '#34d399',
    certs: [
      {
        title: 'IBM Data Science Professional Certificate',
        issuer: 'IBM + Coursera',
        desc: 'Beginner-friendly, globally recognized — covers Python, SQL, ML, and data visualization.',
        year: '2024',
      },
      {
        title: 'Google Advanced Data Analytics Certificate',
        issuer: 'Google + Coursera',
        desc: 'HR departments actively filter for this — covers statistics, regression, and ML with Python.',
        year: '2024',
      },
      {
        title: 'Azure Data Scientist Associate',
        issuer: 'Microsoft Certified',
        desc: 'Cloud + ML combo — very high value for remote jobs integrating Azure ML services.',
        year: '2024',
      },
    ],
  },
  {
    category: 'Cloud',
    icon: 'cloud',
    color: '#0ea5e9',
    certs: [
      {
        title: 'AWS Certified Machine Learning Specialty',
        issuer: 'Amazon Web Services',
        desc: 'Highest paid certification combo — demonstrates ML deployment on AWS at scale.',
        year: '2024',
      },
      {
        title: 'Google Cloud Professional Data Engineer',
        issuer: 'Google Cloud',
        desc: 'Top demand in international remote jobs — covers data pipelines, BigQuery, and ML on GCP.',
        year: '2024',
      },
      {
        title: 'Azure AI Engineer Associate (AI-102)',
        issuer: 'Microsoft Certified',
        desc: 'High demand in Pakistan and internationally — covers Cognitive Services, OpenAI, and Azure AI.',
        year: '2024',
      },
    ],
  },
  {
    category: 'Full Stack / Dev',
    icon: 'code',
    color: '#e6c364',
    certs: [
      {
        title: 'Meta Full Stack Developer Certificate',
        issuer: 'Meta + Coursera',
        desc: 'Internationally recognized — covers React, APIs, databases, and full stack best practices.',
        year: '2024',
      },
      {
        title: 'AWS Certified Developer Associate',
        issuer: 'Amazon Web Services',
        desc: 'Proves cloud deployment skills — highly valued for full stack roles with AWS integration.',
        year: '2024',
      },
    ],
  },
  {
    category: 'Excel / Data',
    icon: 'table_chart',
    color: '#22c55e',
    certs: [
      {
        title: 'Microsoft Office Specialist: Excel Expert',
        issuer: 'Microsoft',
        desc: 'Strong for local Pakistan market — validates advanced Excel, VBA, and data modeling skills.',
        year: '2024',
      },
      {
        title: 'Google Data Analytics Certificate',
        issuer: 'Google + Coursera',
        desc: 'Best starting point for entry level — covers spreadsheets, SQL, R, and Tableau.',
        year: '2024',
      },
    ],
  },
]

export default function Certifications() {
  return (
    <section className="py-20 md:py-section-gap bg-surface-container-lowest" id="certifications">
      <div className="px-4 md:px-margin-desktop max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="mb-12 md:mb-24 reveal">
          <span className="font-label-caps text-label-caps text-primary mb-3 md:mb-4 block">CREDENTIALS</span>
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-surface">Certifications</h2>
        </div>

        {/* Categories */}
        <div className="space-y-16 md:space-y-24">
          {certCategories.map((cat) => (
            <div key={cat.category} className="reveal">
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8 md:mb-10">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0"
                  style={{ background: `${cat.color}15`, border: `0.5px solid ${cat.color}30` }}
                >
                  <span
                    className="material-symbols-outlined text-xl"
                    style={{ color: cat.color, fontVariationSettings: "'FILL' 1" }}
                  >
                    {cat.icon}
                  </span>
                </div>
                <h3
                  className="font-headline-md text-xl md:text-[26px] text-on-surface"
                  style={{ borderBottom: `1px solid ${cat.color}30`, paddingBottom: '8px', flex: 1 }}
                >
                  {cat.category}
                </h3>
              </div>

              {/* Cert cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {cat.certs.map((cert) => (
                  <div
                    key={cert.title}
                    className="group p-6 md:p-7 border border-outline-variant/10 bg-surface hover:border-primary transition-all duration-500"
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center mb-5 rounded-lg"
                      style={{ background: `${cat.color}12`, border: `0.5px solid ${cat.color}30` }}
                    >
                      <span
                        className="material-symbols-outlined text-xl"
                        style={{ color: cat.color, fontVariationSettings: "'FILL' 1" }}
                      >
                        workspace_premium
                      </span>
                    </div>

                    <h4 className="font-headline-md text-[14px] md:text-[16px] text-on-surface mb-2 group-hover:text-primary transition-colors leading-snug">
                      {cert.title}
                    </h4>

                    <p className="font-label-caps text-[10px] text-primary mb-3 tracking-wider">
                      {cert.issuer}
                    </p>

                    <p className="font-technical text-[12px] text-outline-variant leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}