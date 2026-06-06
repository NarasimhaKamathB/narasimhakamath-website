const patents = [
  { year: 2025, no: "US 12,506,669 B2", title: "Read-Write Network Visualization", assignee: "o9 Solutions" },
  { year: 2025, no: "US 12,462,205 B2", title: "Dynamic Memoryless Demand-Supply Pegging", assignee: "o9 Solutions" },
  { year: 2024, no: "US 12,086,185 B2", title: "Aggregated Physical and Logical Network Mesh View", assignee: "o9 Solutions" },
  { year: 2023, no: "US 11,853,940 B1", title: "System and Method of Root Cause Analysis of Objective Violations", assignee: "o9 Solutions" },
  { year: 2023, no: "US 11,809,495 B2", title: "Aggregated Physical and Logical Network Mesh View", assignee: "o9 Solutions" },
  { year: 2023, no: "US 11,792,094 B2", title: "Read-Write Network Visualization", assignee: "o9 Solutions" },
  { year: 2023, no: "US 11,755,993 B2", title: "System and Method of Root Cause Analysis of Objective Violations and Query Analysis", assignee: "o9 Solutions" },
  { year: 2023, no: "US 11,615,357 B2", title: "Dynamic Memoryless Demand-Supply Pegging", assignee: "o9 Solutions" },
  { year: 2022, no: "US 11,416,809 B2", title: "System and Method of Root Cause Analysis of Objective Violations and Query Analysis", assignee: "o9 Solutions" },
  { year: 2019, no: "US 10,325,237 B2", title: "System and Method for Solving Large Scale Supply Chain Planning Problems with Integer Constraints", assignee: "o9 / JDA" },
  { year: 2018, no: "US 10,068,192 B2", title: "System and Method of Solving Supply Chain Campaign Planning Problems Involving Major and Minor Setups", assignee: "JDA Software" },
  { year: 2017, no: "US 9,785,900 B2", title: "System and Method of Solving Supply Chain Campaign Planning Problems Involving Major and Minor Setups", assignee: "JDA Software" },
  { year: 2017, no: "US 9,754,232 B2", title: "System and Method for Solving Large Scale Supply Chain Planning Problems with Integer Constraints", assignee: "JDA Software" },
  { year: 2015, no: "US 8,965,548 B1", title: "System and Method of Solving Supply Chain Campaign Planning Problems Involving Major and Minor Setups", assignee: "JDA Software" },
  { year: 2013, no: "US 8,429,035 B1", title: "System and Method of Solving Large Scale Supply Chain Planning Problems with Integer Constraints", assignee: "JDA Software" },
];

const pending = [
  { filed: "Jan 2026", title: "Distributed Computation Model for Connected Supply Chain" },
  { filed: "Jun 2018", title: "Concurrent Capacity Material Planning in a Highly Interconnected Supply Chain" },
];

export default function Patents() {
  return (
    <section id="patents" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="divider" />
      <p className="section-label mb-6">Intellectual Property</p>
      <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
        <h2 className="text-3xl md:text-4xl font-light text-ink leading-snug">
          <span className="text-navy">12</span> Granted US Patents
          <br />
          <span className="text-2xl text-stone font-light">+ 2 pending (2026)</span>
        </h2>
        <a
          href="https://patents.google.com/?inventor=narasimha+kamath"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium tracking-widest uppercase text-navy hover:underline"
        >
          View on Google Patents →
        </a>
      </div>

      {/* Patent list */}
      <div className="space-y-0">
        {patents.map((p, i) => (
          <div
            key={p.no}
            className={`grid grid-cols-[60px_1fr_auto] gap-4 py-4 items-start ${
              i < patents.length - 1 ? "border-b border-rule" : ""
            }`}
          >
            <span className="text-xs font-medium text-stone pt-0.5">{p.year}</span>
            <div>
              <p className="text-sm font-medium text-ink leading-snug">{p.title}</p>
              <p className="text-xs text-stone mt-0.5">{p.no}</p>
            </div>
            <span className="text-xs text-stone whitespace-nowrap hidden sm:block">{p.assignee}</span>
          </div>
        ))}
      </div>

      {/* Pending */}
      <div className="mt-10 pt-8 border-t border-rule">
        <p className="section-label mb-4">Pending (2026)</p>
        <div className="space-y-3">
          {pending.map((p) => (
            <div key={p.title} className="flex gap-4 text-sm">
              <span className="text-xs text-stone whitespace-nowrap pt-0.5">{p.filed}</span>
              <span className="text-stone italic">{p.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
