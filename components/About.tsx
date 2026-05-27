const values = [
  {
    title: "Personnalisation totale",
    description:
      "Aucun programme copié-collé. Chaque client reçoit un plan construit depuis zéro en fonction de sa morphologie, ses objectifs et ses contraintes.",
  },
  {
    title: "Science & pragmatisme",
    description:
      "Nos méthodes sont basées sur les dernières recherches en physiologie du sport et nutritioon, adaptées à la réalité de la vie quotidienne.",
  },
  {
    title: "Résultats durables",
    description:
      "On ne vous vend pas une transformation en 30 jours. On vous accompagne vers une progression solide et des habitudes qui durent.",
  },
];

export default function About() {
  return (
    <section id="apropos" className="py-24 bg-[#1C1C1C]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">
            Notre histoire
          </span>
          <h2 className="text-4xl font-bold text-white mt-3 mb-6">
            Nés de la passion, <br />
            <span className="text-[#C9A84C]">guidés par les résultats</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            La Maison de la Masse est née d'une frustration simple : il
            n'existait pas de coaching vraiment personnalisé, accessible et
            efficace pour ceux qui veulent progresser sérieusement en
            musculation.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            Depuis 2016, nous avons accompagné plus de 500 clients — débutants
            comme athlètes confirmés — vers leurs objectifs. Notre approche
            combine expertise scientifique et suivi humain pour des résultats
            qui durent.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold hover:gap-3 transition-all"
          >
            Prendre contact →
          </a>
        </div>

        <div className="space-y-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-6 rounded-xl border border-white/10 bg-white/5"
            >
              <h3 className="font-bold text-white mb-2">{value.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
