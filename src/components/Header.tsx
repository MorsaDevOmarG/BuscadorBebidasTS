import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-800">
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img src="/logo.svg" alt="Logotipo" className="w-32" />
          </div>

          <nav className="flex gap-4">
            {/* to: es la URL que visitará */}
            <Link to="/" className="text-white uppercase font-bold hover:text-yellow-500 transition-colors">Inicio</Link>
            <Link to="/favoritos" className="ml-5 text-white font-bold hover:text-yellow-500 transition-colors">Favoritos</Link>
          </nav>
        </div>
      </div>
    </header>
  )
};
