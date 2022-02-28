import { Routes, Route } from 'react-router-dom';

import { FlexDirectionPage } from './pages/FlexDirectionPage';
import { JustifyContentPage } from './pages/JustifyContentPage';
import { AlignItemsPage } from './pages/AlignItemsPage';
import { FlexPage } from './pages/FlexPage';

import { Navigation } from './components/Navigation/Navigation';

import './styles.css';

export const App = () => {
  return (
    <div className="flex-container">
      <Navigation />
      <Routes>
        <Route path="/" element={<FlexDirectionPage />} />
        <Route path="/flex-direction" element={<FlexDirectionPage />} />
        <Route path="/justify-content" element={<JustifyContentPage />} />
        <Route path="/align-items" element={<AlignItemsPage />} />
        <Route path="/flex" element={<FlexPage />} />
      </Routes>
    </div>
  );
};
