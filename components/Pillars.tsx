const pillars = [
  {
    number: "01",
    title: "Agentic AI Platform Development",
    summary:
      "Building multi-tenant agentic AI systems that automate complex enterprise decision-making at scale — from demand forecasting and supply optimisation to root-cause analysis and scenario planning.",
    points: [
      "Architected o9's agentic AI platform on AWS, Azure, GCP & Samsung Cloud",
      "12 granted US patents in optimization, demand-supply pegging, network visualization, and K8 auto-scaling",
      "LLM-augmented forecasting & agentic planning workflows in production",
      "99.9% uptime across 200+ enterprise deployments at $100M+ scale",
    ],
    tags: ["Agentic AI", "LLMs", "Optimization", "Multi-tenant SaaS", "Decision Intelligence"],
  },
  {
    number: "02",
    title: "Supply Chain Intelligence",
    summary:
      "Two decades of research and practice at the frontier of supply chain science — from perishable item models and system dynamics to large-scale integer programming and ML-driven planning.",
    points: [
      "PhD, IIM Calcutta — EFMD Outstanding Doctoral Research Award (first Indian recipient)",
      "Published in European Journal of Operational Research, IJPE, and 25+ peer-reviewed outlets",
      "Co-created global course with Prof. David Simchi-Levi (MIT) & Prof. Manoj K. Tiwari (IIM Mumbai)",
      "Board Member, School of Supply Chain & Logistics — Young India Skills University",
    ],
    tags: ["Supply Chain Optimization", "Demand Forecasting", "System Dynamics", "Integer Programming"],
  },
  {
    number: "03",
    title: "Cybersecurity",
    summary:
      "Concurrent Global CISO responsibility alongside R&D leadership — building enterprise security posture from the ground up, with security embedded into the product rather than bolted on.",
    points: [
      "Global CISO: SOC1/SOC2, ISO 27001/27017, TISAX, GDPR, and India's DPDP framework",
      "DevSecOps pipelines from secure design to production across a 3,000-person company",
      "Published research in intrusion detection, network survivability, and OT cybersecurity",
      "Security-first culture: zero post-deployment breaches across 200+ enterprise tenants",
    ],
    tags: ["CISO", "SOC2 / ISO 27001", "DevSecOps", "Intrusion Detection", "OT Security"],
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="divider" />
      <p className="section-label mb-6">Expertise</p>
      <h2 className="text-3xl md:text-4xl font-light text-ink mb-16 max-w-xl leading-snug">
        Three pillars of{" "}
        <span className="text-navy">thought leadership</span>
      </h2>

      <div className="space-y-0">
        {pillars.map((p, i) => (
          <div
            key={p.number}
            className={`grid md:grid-cols-[80px_1fr_1fr] gap-8 py-12 ${
              i < pillars.length - 1 ? "border-b border-rule" : ""
            }`}
          >
            {/* Number */}
            <div>
              <span className="text-5xl font-light text-rule">{p.number}</span>
            </div>

            {/* Title + summary */}
            <div>
              <h3 className="text-xl font-medium text-ink mb-4 leading-snug">{p.title}</h3>
              <p className="text-sm text-stone leading-relaxed mb-6">{p.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-chip text-navy border border-navy/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bullet points */}
            <div className="space-y-3">
              {p.points.map((pt) => (
                <div key={pt} className="flex gap-3 text-sm text-stone leading-relaxed">
                  <span className="text-navy mt-0.5 shrink-0">→</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
