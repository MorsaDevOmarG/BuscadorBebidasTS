import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  // Nos ayuda a obtener la ruta actual donde estamos o donde se encuentra el usuario
  const location = useLocation();
  console.log(location);
  console.log(location.pathname); // Nos devuelve la ruta actual

  return (
    <header className="bg-slate-800">
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img src="/logo.svg" alt="Logotipo" className="w-32" />
          </div>

          <nav className="flex gap-4">
            {/* to: es la URL que visitará */}
            {/* <Link to="/" className="text-white uppercase font-bold hover:text-yellow-500 transition-colors">Inicio</Link>
            <Link to="/favoritos" className="ml-5 text-white font-bold hover:text-yellow-500 transition-colors">Favoritos</Link> */}
            {/* La diferencia es que NAVLINK tiene un estilo especial para el link activo */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Inicio
            </NavLink>
            
            <NavLink
              to="/favoritos"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
