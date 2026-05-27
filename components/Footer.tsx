export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-white font-bold">La Maison </span>
            <span className="text-[#C9A84C] font-bold">de la Masse</span>
            <p className="text-gray-500 text-sm mt-1">
              Coaching musculation & nutrition sur-mesure
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm text-gray-500">
            {["Services", "Tarifs", "Témoignages", "À propos", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace("é", "e").replace(" ", "").replace("à", "a")}`}
                  className="hover:text-gray-300 transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} La Maison de la Masse
          </p>
        </div>
      </div>
    </footer>
  );
}
