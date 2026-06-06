const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/narasimhakamath", desc: "Professional profile & posts" },
  { label: "ORCID", href: "https://orcid.org/0000-0002-3959-0541", desc: "Research identity & publications" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=BpTVSzoAAAAJ&hl=en", desc: "Citations & h-index" },
  { label: "GitHub", href: "https://github.com/NarasimhaKamathB", desc: "Code & open-source work" },
  { label: "Google Patents", href: "https://patents.google.com/?inventor=narasimha+kamath", desc: "US patent portfolio" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="divider" />

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <p className="section-label mb-6">Contact</p>
          <h2 className="text-3xl md:text-4xl font-light text-ink mb-6 leading-snug">
            Let&apos;s build something{" "}
            <span className="text-navy">remarkable</span>
          </h2>
          <p className="text-stone text-sm leading-relaxed mb-8 max-w-sm">
            Open to speaking engagements, advisory roles, research collaborations,
            and conversations about the future of AI in enterprise.
          </p>
          <a
            href="mailto:narasimha.kamath@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white text-sm font-medium rounded hover:bg-navy/90 transition-colors"
          >
            narasimha.kamath@gmail.com
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

        <div>
          <p className="section-label mb-6">Find me online</p>
          <div className="space-y-0">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between py-4 group ${
                  i < links.length - 1 ? "border-b border-rule" : ""
                }`}
              >
                <div>
                  <p className="text-sm font-medium text-ink group-hover:text-navy transition-colors">
                    {l.label}
                  </p>
                  <p className="text-xs text-stone">{l.desc}</p>
                </div>
                <svg
                  className="w-4 h-4 text-rule group-hover:text-navy transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-rule flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="text-xs text-stone">
          © 2026 Dr. Narasimha Kamath · Bengaluru, India
        </p>
        <p className="text-xs text-stone">
          EVP R&D & Global CISO · o9 Solutions · NarasimhaKamath.ai
        </p>
      </div>
    </section>
  );
}
