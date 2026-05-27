const testimonials = [
  {
    name: "Thomas R.",
    age: 28,
    result: "+14 kg de masse en 6 mois",
    text: "J'ai essayé plusieurs coachs avant La Maison de la Masse. Rien de comparable. Le programme est vraiment adapté à ma vie, pas un plan générique. Les résultats parlent d'eux-mêmes.",
    avatar: "TR",
    plan: "Performance",
  },
  {
    name: "Camille D.",
    age: 32,
    result: "Recomposition réussie -8% MG",
    text: "En tant que femme, j'avais peur d'être mal accompagnée pour la musculation. Ici, chaque étape est expliquée, le suivi nutritionnel est précis et je n'ai jamais eu autant de résultats.",
    avatar: "CD",
    plan: "Performance",
  },
  {
    name: "Kevin M.",
    age: 24,
    result: "Squat 100 kg → 160 kg en 8 mois",
    text: "La méthode est sérieuse, scientifique et ultra-personnalisée. Le check-in hebdomadaire fait toute la différence — les ajustements sont immédiats quand quelque chose bloque.",
    avatar: "KM",
    plan: "Elite",
  },
  {
    name: "Sophie L.",
    age: 38,
    result: "Objectif atteint après 2 ans de stagnation",
    text: "Deux ans à me battre sans progresser. En 4 mois avec La Maison de la Masse, j'ai finalement compris ce que je faisais mal. Le coaching Elite vaut chaque centime.",
    avatar: "SL",
    plan: "Elite",
  },
];

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">
            Témoignages
          </span>
          <h2 className="text-4xl font-bold text-[#1C1C1C] mt-3 mb-4">
            Ils ont transformé leur corps
          </h2>
          <p className="text-[#6B6B6B] max-w-xl mx-auto">
            Des résultats réels, obtenus grâce à un suivi rigoureux et un programme adapté.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-[#1C1C1C]">
                    {t.name}, {t.age} ans
                  </div>
                  <div className="text-xs text-[#C9A84C] font-semibold mt-0.5">
                    {t.result}
                  </div>
                </div>
                <span className="ml-auto text-xs text-[#6B6B6B] bg-gray-100 px-2.5 py-1 rounded-full">
                  {t.plan}
                </span>
              </div>

              <div className="text-3xl text-[#C9A84C] mb-3 leading-none">"</div>
              <p className="text-[#6B6B6B] leading-relaxed italic">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
