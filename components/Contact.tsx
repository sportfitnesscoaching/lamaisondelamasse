"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    goal: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <section id="contact" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase">
            Nous contacter
          </span>
          <h2 className="text-4xl font-bold text-[#1C1C1C] mt-3 mb-6">
            Prêt à démarrer votre transformation ?
          </h2>
          <p className="text-[#6B6B6B] leading-relaxed mb-8">
            Remplissez le formulaire et nous vous répondons sous 24h pour un
            premier échange gratuit et sans engagement. Décrivez votre
            situation, vos objectifs et le programme le plus adapté vous sera
            recommandé.
          </p>

          <div className="space-y-4">
            {[
              { icon: "✉️", label: "contact@lamaisondelamasse.fr" },
              { icon: "📱", label: "@lamaisondelamasse" },
              { icon: "⏰", label: "Réponse garantie sous 24h" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-sm text-[#6B6B6B]">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          {status === "sent" ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">
                Message envoyé !
              </h3>
              <p className="text-[#6B6B6B]">
                Nous vous répondrons dans les 24 heures.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#1C1C1C] mb-1.5">
                  Nom complet
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jean Dupont"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#C9A84C] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1C1C1C] mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jean@exemple.fr"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#C9A84C] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1C1C1C] mb-1.5">
                  Votre objectif principal
                </label>
                <select
                  required
                  value={form.goal}
                  onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#C9A84C] transition-colors bg-white"
                >
                  <option value="">Choisissez votre objectif</option>
                  <option>Prise de masse musculaire</option>
                  <option>Perte de gras / sèche</option>
                  <option>Recomposition corporelle</option>
                  <option>Améliorer mes performances</option>
                  <option>Débuter la musculation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1C1C1C] mb-1.5">
                  Votre situation (optionnel)
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Décrivez votre niveau actuel, vos contraintes, vos questions..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#C9A84C] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 bg-[#C9A84C] text-white font-semibold rounded-full hover:bg-[#B8963E] transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Envoi en cours..." : "Envoyer ma demande"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
