const course = {
  title: "Data Driven Supply Chain Transformation",
  desc: "A globally delivered online course co-created with two of the world's leading supply chain researchers.",
  collaborators: [
    { name: "Prof. David Simchi-Levi", inst: "MIT" },
    { name: "Prof. Manoj K. Tiwari", inst: "Director, IIM Mumbai" },
  ],
  platform: "IIM Mumbai × MIT",
};

const topics = [
  "Agentic AI and Decision Intelligence in Enterprise Operations",
  "Large-Scale Supply Chain Optimisation: From Theory to Production",
  "Generative AI in Enterprise Planning Workflows",
  "Neuro-Symbolic AI for Complex Decision-Making",
  "Cybersecurity for Operational Technology (OT) Environments",
  "Building AI-First R&D Organisations at Scale",
  "The Future of AI-Driven Business Transformation",
];

const academic = [
  { inst: "IIT Kharagpur", role: "Research Collaborator" },
  { inst: "IIT BHU", role: "PhD Co-guide" },
  { inst: "IIT Guwahati", role: "Research Collaborator" },
  { inst: "IIT Bombay", role: "Research Collaborator" },
  { inst: "IIM Bangalore", role: "Research Collaborator" },
  { inst: "IIM Mumbai", role: "Research Collaborator & Course Co-creator" },
  { inst: "IIM Jammu", role: "Research Collaborator" },
  { inst: "Young India Skills University", role: "Board Member, School of SCM & Logistics" },
];

export default function Speaking() {
  return (
    <section id="speaking" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="divider" />
      <p className="section-label mb-6">Speaking & Collaboration</p>
      <h2 className="text-3xl md:text-4xl font-light text-ink mb-16 leading-snug">
        Where research meets{" "}
        <span className="text-navy">the real world</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Left col */}
        <div className="space-y-12">
          {/* Signature course */}
          <div>
            <p className="section-label mb-4">Signature Course</p>
            <div className="border border-rule rounded-lg p-6">
              <h3 className="text-base font-medium text-ink mb-2">{course.title}</h3>
              <p className="text-sm text-stone mb-4 leading-relaxed">{course.desc}</p>
              <div className="space-y-2 mb-4">
                {course.collaborators.map((c) => (
                  <div key={c.name} className="flex gap-2 text-sm">
                    <span className="text-navy">→</span>
                    <span className="text-ink font-medium">{c.name}</span>
                    <span className="text-stone">· {c.inst}</span>
                  </div>
                ))}
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-chip text-navy border border-navy/10">
                {course.platform}
              </span>
            </div>
          </div>

          {/* Speaking topics */}
          <div>
            <p className="section-label mb-4">Speaking Topics</p>
            <div className="space-y-2">
              {topics.map((t) => (
                <div key={t} className="flex gap-3 text-sm text-stone">
                  <span className="text-navy shrink-0 mt-0.5">→</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-stone italic">
              Available for keynotes, panel discussions, executive workshops, and academic seminars.
            </p>
          </div>
        </div>

        {/* Right col — academic network */}
        <div>
          <p className="section-label mb-4">Academic Network</p>
          <p className="text-sm text-stone mb-6 leading-relaxed">
            An active bridge between industry and academia — collaborating with
            India's premier research institutions on AI, supply chain, and
            operations research.
          </p>
          <div className="space-y-3">
            {academic.map((a) => (
              <div
                key={a.inst}
                className="flex items-center justify-between py-3 border-b border-rule last:border-0"
              >
                <span className="text-sm font-medium text-ink">{a.inst}</span>
                <span className="text-xs text-stone text-right max-w-[180px]">{a.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
