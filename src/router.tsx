import {BrowserRouter, Routes, Route} from 'react-router-dom';
import IndexPage from './views/indexPage';
import FavoritesPage from './views/FavoritesPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* path: es la URL que visitará */}
        <Route path="/" element={<IndexPage />} />
        <Route path="/favoritos" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  )
};
