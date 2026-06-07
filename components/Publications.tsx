"use client";
import { useState } from "react";

const books = [
  {
    year: 2016,
    title: "Handbook of Research on Strategic Supply Chain Management in the Retail Industry",
    venue: "IGI Global",
    note: "Co-editor with Swapnil Saurav · ISBN: 978-1-4666-9894-9",
    link: "https://www.igi-global.com/book/handbook-research-strategic-supply-chain/140976",
  },
];

const journals = [
  {
    year: 2018,
    title: "Dual market facility network design under bounded rationality",
    venue: "Algorithms, 11(4): 54",
    link: "https://doi.org/10.3390/a11040054",
  },
  {
    year: 2008,
    title: "A hybrid model for network security systems: Integrating intrusion detection system with survivability",
    venue: "International Journal of Network Security, 7(2): 249–260",
    link: "http://ijns.jalaxy.com.tw/contents/ijns-v7-n2/ijns-2008-v7-n2-p249-260.pdf",
  },
  {
    year: 2007,
    title: "Capacity augmentation of a supply chain for a short lifecycle product: A system dynamics framework",
    venue: "European Journal of Operational Research, 179(2): 334–351",
    link: "https://doi.org/10.1016/j.ejor.2006.03.045",
  },
  {
    year: 2007,
    title: "Lead time minimization of multi-product, single-processor system: A comparison of cyclic policies",
    venue: "International Journal of Production Economics, 106(1): 28–40",
    link: "https://doi.org/10.1016/j.ijpe.2006.04.002",
  },
  {
    year: 2006,
    title: "Integrated inventory model for similar products under a two-echelon supply chain environment: An empirical study",
    venue: "OPSEARCH, 43(4): 331–357",
    link: "https://doi.org/10.1007/BF03398782",
  },
];

const chapters = [
  {
    year: 2026,
    title: "Revolutionizing Sales Forecasting in Quick-Service Restaurants using Hybrid Deep Learning Models",
    venue: "Operations Research and Data Analytics: Current Trends and Future Perspectives, Springer",
    link: "https://link.springer.com/chapter/10.1007/978-981-96-8327-7_5",
  },
  {
    year: 2020,
    title: "Dynamics of Supply Chains for Perishable and Non-Perishable Items",
    venue: "Supply Chain and Logistics Management, IGI Global",
    link: "https://doi.org/10.4018/978-1-7998-0945-6.ch015",
  },
];

const conferences = [
  { year: 2024, title: "Revolutionizing Sales Forecasting in Quick-Service Restaurants using Hybrid Deep Learning Models", venue: "ICIEA, IIT Kharagpur" },
  { year: 2014, title: "Proposing Best Value Supply Chain for Perishable Goods in Indian Market", venue: "4th Biennial SCM Conference, IIM Bangalore" },
  { year: 2009, title: "Integrated Cost Model for Deteriorating Items in a Multi-echelon supply chain", venue: "AIMS-7, IIM Bangalore · IBA Best Paper Award", award: true },
  { year: 2005, title: "Supply Chain Structure Design for a Short Lifecycle Product: A Loop Dominance Based Analysis", venue: "HICSS-38, Hawaii, USA" },
  { year: 2004, title: "A Rough Neuro Data Mining Approach for Network Intrusion Detection", venue: "IWDC 2004, Kolkata" },
];

type TabKey = "journals" | "books" | "chapters" | "conferences";

const tabs: { key: TabKey; label: string }[] = [
  { key: "journals", label: "Journal Articles" },
  { key: "books", label: "Books" },
  { key: "chapters", label: "Book Chapters" },
  { key: "conferences", label: "Conference Papers" },
];

export default function Publications() {
  const [active, setActive] = useState<TabKey>("journals");

  const data: Record<TabKey, { year: number; title: string; venue: string; link?: string | null; note?: string; award?: boolean }[]> = {
    journals,
    books,
    chapters,
    conferences,
  };

  return (
    <section id="publications" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="divider" />
      <p className="section-label mb-6">Research</p>
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <h2 className="text-3xl md:text-4xl font-light text-ink leading-snug">
          <span className="text-navy">25+</span> Publications
        </h2>
        <div className="flex gap-3">
          <a
            href="https://orcid.org/0000-0002-3959-0541"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium tracking-widest uppercase text-navy hover:underline"
          >
            ORCID →
          </a>
          <a
            href="https://scholar.google.com/citations?user=BpTVSzoAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium tracking-widest uppercase text-navy hover:underline"
          >
            Google Scholar →
          </a>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-0 border-b border-rule mb-8 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`px-4 py-2.5 text-xs font-medium tracking-widest uppercase transition-colors whitespace-nowrap ${
              active === t.key
                ? "border-b-2 border-navy text-navy"
                : "text-stone hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-0">
        {data[active].map((item, i) => (
          <div
            key={i}
            className={`grid grid-cols-[50px_1fr] gap-4 py-4 items-start ${
              i < data[active].length - 1 ? "border-b border-rule" : ""
            }`}
          >
            <span className="text-xs text-stone pt-0.5">{item.year}</span>
            <div>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-ink hover:text-navy transition-colors leading-snug link-underline"
                >
                  {item.title}
                </a>
              ) : (
                <p className="text-sm font-medium text-ink leading-snug">{item.title}</p>
              )}
              <p className="text-xs text-stone mt-1">{item.venue}</p>
              {item.note && <p className="text-xs text-stone/70 mt-0.5">{item.note}</p>}
              {item.award && (
                <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  Best Paper Award
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
