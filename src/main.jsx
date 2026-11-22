import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import App from './App.jsx';

import { HomePage } from './pages/Home';
import { GalaxiesPage } from './pages/Galaxies';
import { PlanetsPage } from './pages/Planets';
import { PracticePage } from './pages/Practice';
import { Task1Page } from './pages/Task1';
import { Task2Page } from './pages/Task2';

import './index.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="galaxies" element={<GalaxiesPage />} />
        <Route path="planets" element={<PlanetsPage />} />
        <Route path="practice" element={<PracticePage />} />
        <Route path="task1" element={<Task1Page />} />
        <Route path="task2" element={<Task2Page />} />
      </Route>
    </Routes>
  </HashRouter>
);