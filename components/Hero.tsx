export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#1C1C1C] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1C] via-[#2a2a2a] to-[#1C1C1C]" />

      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#C9A84C,transparent_60%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-6">
            Coaching Expert
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Construisez le corps{" "}
            <span className="text-[#C9A84C]">que vous méritez</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-lg">
            Programmes musculation et nutrition entièrement personnalisés.
            Chaque plan est conçu sur mesure pour votre morphologie, vos
            objectifs et votre mode de vie.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#tarifs"
              className="px-8 py-4 bg-[#C9A84C] text-white font-semibold rounded-full hover:bg-[#B8963E] transition-colors"
            >
              Voir les offres
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-full hover:border-gray-400 hover:text-white transition-colors"
            >
              En savoir plus
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { number: "500+", label: "Clients transformés" },
            { number: "8 ans", label: "d'expérience" },
            { number: "98%", label: "Taux de satisfaction" },
            { number: "100%", label: "Sur-mesure" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-[#C9A84C] mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs tracking-widest uppercase">Découvrir</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
}
