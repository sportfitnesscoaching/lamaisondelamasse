const services = [
  {
    icon: "💪",
    title: "Coaching Musculation",
    description:
      "Programmes d'entraînement progressifs et personnalisés selon votre niveau, vos équipements disponibles et vos objectifs de prise de masse.",
    features: ["Plan d'entraînement sur-mesure", "Vidéos techniques", "Adaptations hebdomadaires"],
  },
  {
    icon: "🥗",
    title: "Plans Nutrition",
    description:
      "Calcul précis de vos besoins caloriques et macro-nutritionnels pour optimiser votre prise de masse, sèche ou recomposition corporelle.",
    features: ["Bilan nutritionnel complet", "Plans de repas variés", "Supplémentation guidée"],
  },
  {
    icon: "📊",
    title: "Suivi & Ajustements",
    description:
      "Check-in hebdomadaire pour analyser vos progrès, ajuster les charges, les calories et s'assurer que vous avancez dans la bonne direction.",
    features: ["Analyse de photos et mensurations", "Ajustements en temps réel", "Rapport mensuel de progression"],
  },
  {
    icon: "🤝",
    title: "Support Communauté",
    description:
      "Accédez à notre groupe privé et bénéficiez d'un support quotidien pour toutes vos questions, blocages ou doutes.",
    features: ["Groupe privé membres", "Réponse sous 24h", "Sessions Q&A live mensuelles"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">
            Ce que nous offrons
          </span>
          <h2 className="text-4xl font-bold text-[#1C1C1C] mt-3 mb-4">
            Tout ce qu'il faut pour progresser
          </h2>
          <p className="text-[#6B6B6B] max-w-xl mx-auto">
            Une approche globale qui combine entraînement, nutrition et suivi
            pour des résultats durables et mesurables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-[#C9A84C]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#1C1C1C] mb-3">
                {service.title}
              </h3>
              <p className="text-[#6B6B6B] leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-[#1C1C1C]"
                  >
                    <span className="w-4 h-4 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
