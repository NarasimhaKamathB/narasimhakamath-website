export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto"
    >
      {/* Location tag */}
      <p className="section-label fade-up fade-up-delay-1 mb-8">
        Bengaluru, India
      </p>

      {/* Name */}
      <h1 className="fade-up fade-up-delay-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-ink leading-tight tracking-tight mb-6">
        Dr. Narasimha
        <br />
        <span className="text-navy">Kamath</span>
      </h1>

      {/* One-liner */}
      <p className="fade-up fade-up-delay-3 text-lg sm:text-xl md:text-2xl font-light text-stone max-w-2xl leading-relaxed mb-10">
        I build AI systems that make supply chains think —
        and secure them against the threats of tomorrow.
      </p>

      {/* Pill tags */}
      <div className="fade-up fade-up-delay-4 flex flex-wrap gap-2 mb-12">
        {[
          "Agentic AI Platform Builder",
          "Supply Chain Intelligence",
          "Global CISO",
          "12 US Patents",
          "PhD IIM Calcutta · EFMD Award",
          "Board Member YISU",
        ].map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-3 py-1.5 rounded-full bg-chip text-navy border border-navy/10"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div className="fade-up fade-up-delay-4 flex flex-wrap gap-4 mb-20">
        <a
          href="https://www.linkedin.com/in/narasimhakamath"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white text-sm font-medium rounded hover:bg-navy/90 transition-colors"
        >
          LinkedIn
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        <a
          href="https://orcid.org/0000-0002-3959-0541"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-rule text-ink text-sm font-medium rounded hover:border-navy hover:text-navy transition-colors"
        >
          ORCID · Research
        </a>
        <a
          href="https://github.com/NarasimhaKamathB"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-rule text-ink text-sm font-medium rounded hover:border-navy hover:text-navy transition-colors"
        >
          GitHub
        </a>
        <a
          href="mailto:narasimha.kamath@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-rule text-ink text-sm font-medium rounded hover:border-navy hover:text-navy transition-colors"
        >
          Email
        </a>
      </div>

      {/* Stat bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-rule pt-10">
        {[
          { num: "25+", label: "Years Experience" },
          { num: "200+", label: "Enterprise Customers" },
          { num: "12", label: "US Patents Granted" },
          { num: "25+", label: "Publications" },
        ].map((s) => (
          <div key={s.label}>
            <p className="text-3xl font-light text-navy mb-1">{s.num}</p>
            <p className="text-xs font-medium tracking-widest uppercase text-stone">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
