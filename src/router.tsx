import {BrowserRouter, Routes, Route} from 'react-router-dom';
import IndexPage from './views/indexPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* path: es la URL que visitará */}
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  )
};
