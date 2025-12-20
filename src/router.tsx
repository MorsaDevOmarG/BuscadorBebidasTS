import {BrowserRouter, Routes, Route} from 'react-router-dom';
import IndexPage from './views/indexPage';
import FavoritesPage from './views/FavoritesPage';
import Layout from './layouts/Layout';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Al poner el ROUTE englobal los otros LAYOUT, es para que te permita usar un COMPONENTE en los demás COMPONENTES sin la necesidad de estar importandolo en cada uno de los COMPONENTES */}
        <Route element={<Layout />}>
          {/* path: es la URL que visitará, al poner index=true se establece como la ruta principal */}
          <Route path="/" element={<IndexPage />} index />
          <Route path="/favoritos" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
