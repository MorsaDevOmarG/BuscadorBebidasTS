import { useEffect, useMemo } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {
  // Nos ayuda a obtener la ruta actual donde estamos o donde se encuentra el usuario
  const { pathname } = useLocation();
  // console.log(location);
  // console.log(location.pathname); // Nos devuelve la ruta actual

  const isHome = useMemo(() => pathname === "/", [pathname]);
  // console.log(isHome);

  const fetchCategories = useAppStore((store) => store.fetchCategories);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <header className={isHome ? "bg-header bg-cover bg-center bg-no-repeat" : "bg-slate-800"}>
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

        {isHome && (
          <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Nombre o Ingrediente
              </label>

              {/* focus: outline: es para cuando el usuario hace clic en el input, no se ponga el color azul */}
              <input
                type="text"
                name="ingredient"
                id="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none bg-white"
                placeholder="Nombre o Ingrediente. Ej: Vodka, Tequila, Café"
              />
            </div>

            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Categoría
              </label>

              <select
                name="ingredient"
                id="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none bg-white"
              >
                <option value="">-- Selecciona --</option>
              </select>
            </div>

            <input type="submit" value="Buscar Recetas" className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase" />
          </form>
        )}
      </div>
    </header>
  );
}
