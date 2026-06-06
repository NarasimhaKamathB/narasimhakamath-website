import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="divider" />

      {/* Photo + name block */}
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-8 mb-16">
        <div className="relative w-40 h-40 sm:w-52 sm:h-52 shrink-0">
          {/* Subtle background shape behind photo */}
          <div className="absolute inset-0 rounded-2xl bg-chip translate-x-2 translate-y-2" />
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-rule shadow-sm">
            <Image
              src="/photo.png"
              alt="Dr. Narasimha Kamath"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
        <div>
          <p className="section-label mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-light text-ink leading-snug">
            Executive. Researcher.<br />
            <span className="text-navy">Builder.</span>
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left — bio */}
        <div>
          <div className="space-y-4 text-stone leading-relaxed text-[15px]">
            <p>
              Dr. Narasimha Kamath is a globally recognised technology executive
              at the intersection of Artificial Intelligence, Supply Chain
              Management, and Cybersecurity — with over 25 years of building
              systems that operate at planetary scale.
            </p>
            <p>
              As <strong className="text-ink font-medium">EVP R&D & Global CISO at o9 Solutions</strong>, he
              leads a 450-person global R&D organisation and has scaled the
              company's agentic AI platform from zero to 200+ marquee
              enterprises including Samsung, Nike, AB InBev, Tata Steel, and
              Walmart.
            </p>
            <p>
              A <strong className="text-ink font-medium">Gold Medallist from NIT Karnataka</strong> and{" "}
              <strong className="text-ink font-medium">Fellow (PhD) of IIM Calcutta</strong>, he was the
              first Indian to receive the prestigious{" "}
              <strong className="text-ink font-medium">Emerald/EFMD Outstanding Doctoral Research Award</strong>.
              Backed by an Infosys Research Fellowship, his doctoral work on
              supply chain optimisation has been cited in leading international
              journals including EJOR and IJPE.
            </p>
            <p>
              He serves on the Board of the School of Supply Chain & Logistics
              at Young India Skills University, Telangana, and collaborates
              actively with IIM Bangalore, IIM Mumbai, IIT Kharagpur, IIT BHU,
              and IIT Guwahati.
            </p>
          </div>
        </div>

        {/* Right — credentials */}
        <div className="space-y-6">
          <p className="section-label mb-6">Credentials</p>

          {[
            {
              inst: "IIM Calcutta",
              deg: "PhD, Supply Chain Management",
              note: "EFMD Outstanding Doctoral Research Award · First Indian recipient",
            },
            {
              inst: "IIM Calcutta",
              deg: "MBA",
              note: "Batch Topper",
            },
            {
              inst: "NIT Karnataka (KREC)",
              deg: "B.E. Mechanical Engineering",
              note: "Gold Medalist",
            },
          ].map((c) => (
            <div key={c.inst + c.deg} className="border-l-2 border-navy pl-5 py-1">
              <p className="text-xs font-medium tracking-widest uppercase text-navy mb-1">{c.inst}</p>
              <p className="text-sm font-medium text-ink mb-0.5">{c.deg}</p>
              <p className="text-xs text-stone">{c.note}</p>
            </div>
          ))}

          <div className="mt-8 pt-8 border-t border-rule">
            <p className="section-label mb-4">Current Roles</p>
            <ul className="space-y-2 text-sm text-stone">
              <li className="flex gap-2"><span className="text-navy mt-0.5">→</span> EVP R&D & Global CISO, o9 Solutions</li>
              <li className="flex gap-2"><span className="text-navy mt-0.5">→</span> Board Member, School of Supply Chain & Logistics, YISU</li>
              <li className="flex gap-2"><span className="text-navy mt-0.5">→</span> PhD Co-guide, IIT BHU</li>
              <li className="flex gap-2"><span className="text-navy mt-0.5">→</span> Research Collaborator — IIT Kharagpur, IIT Guwahati, IIM Bangalore, IIM Mumbai</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
