const plans = [
  {
    name: "Starter",
    price: "79",
    period: "/ mois",
    description: "Pour démarrer votre transformation avec les bases solides.",
    features: [
      "Programme musculation personnalisé",
      "Plan nutritionnel de base",
      "1 check-in mensuel",
      "Accès à la communauté privée",
      "Support par email",
    ],
    cta: "Commencer",
    highlighted: false,
  },
  {
    name: "Performance",
    price: "149",
    period: "/ mois",
    description: "Le programme complet pour ceux qui veulent des résultats sérieux.",
    features: [
      "Tout le pack Starter",
      "Suivi nutritionnel avancé",
      "Check-in hebdomadaire",
      "Ajustements en temps réel",
      "Vidéothèque technique complète",
      "Support prioritaire sous 12h",
    ],
    cta: "Choisir Performance",
    highlighted: true,
    badge: "Le plus populaire",
  },
  {
    name: "Elite",
    price: "249",
    period: "/ mois",
    description: "Pour les athlètes exigeants qui veulent un coaching de haut niveau.",
    features: [
      "Tout le pack Performance",
      "Coaching 1-on-1 hebdomadaire (visio)",
      "Analyse de vidéos d'entraînement",
      "Protocoles de récupération",
      "Stratégie compétition / photo shoot",
      "Accès direct WhatsApp coach",
    ],
    cta: "Rejoindre Elite",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">
            Nos offres
          </span>
          <h2 className="text-4xl font-bold text-[#1C1C1C] mt-3 mb-4">
            Investissez dans votre corps
          </h2>
          <p className="text-[#6B6B6B] max-w-xl mx-auto">
            Des plans adaptés à chaque profil. Sans engagement, résiliable à
            tout moment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-[#1C1C1C] shadow-2xl scale-105"
                  : "bg-white border border-gray-100"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#C9A84C] text-white text-xs font-bold rounded-full whitespace-nowrap">
                  {plan.badge}
                </span>
              )}

              <div className="mb-6">
                <h3
                  className={`text-lg font-bold mb-2 ${
                    plan.highlighted ? "text-white" : "text-[#1C1C1C]"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-3">
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlighted ? "text-[#C9A84C]" : "text-[#1C1C1C]"
                    }`}
                  >
                    {plan.price}€
                  </span>
                  <span
                    className={`text-sm mb-1 ${
                      plan.highlighted ? "text-gray-400" : "text-[#6B6B6B]"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    plan.highlighted ? "text-gray-400" : "text-[#6B6B6B]"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm"
                  >
                    <span
                      className={`mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? "text-[#C9A84C]" : "text-[#C9A84C]"
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={
                        plan.highlighted ? "text-gray-300" : "text-[#1C1C1C]"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3.5 rounded-full font-semibold text-sm transition-colors ${
                  plan.highlighted
                    ? "bg-[#C9A84C] text-white hover:bg-[#B8963E]"
                    : "border-2 border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#6B6B6B] mt-10">
          Pas sûr de votre choix ?{" "}
          <a href="#contact" className="text-[#C9A84C] font-medium hover:underline">
            Discutons ensemble gratuitement →
          </a>
        </p>
      </div>
    </section>
  );
}
