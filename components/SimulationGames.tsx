const games = [
  {
    title: "Cake Game",
    desc: "An interactive simulation game for comprehending perishability in supply chains. Players experience the dynamics of ordering, spoilage, and demand uncertainty first-hand.",
    link: "https://cake-game-6o4q.vercel.app/",
  },
];

export default function SimulationGames() {
  return (
    <section id="simulation-games" className="px-6 py-24 max-w-6xl mx-auto">
      <div className="divider" />
      <p className="section-label mb-6">Teaching</p>
      <h2 className="text-3xl md:text-4xl font-light text-ink mb-16 leading-snug">
        Simulation <span className="text-navy">Games</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {games.map((g) => (
          <div key={g.title} className="border border-rule rounded-lg p-6 flex flex-col gap-4">
            <h3 className="text-base font-medium text-ink">{g.title}</h3>
            <p className="text-sm text-stone leading-relaxed">{g.desc}</p>
            <a
              href={g.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-navy hover:underline"
            >
              Play the game →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
