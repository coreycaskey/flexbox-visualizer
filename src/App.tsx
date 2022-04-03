import { Routes, Route } from 'react-router-dom';

import { FlexDirectionPage } from './pages/FlexDirectionPage';
import { JustifyContentPage } from './pages/JustifyContentPage';
import { AlignItemsPage } from './pages/AlignItemsPage';
import { FlexWrapPage } from './pages/FlexWrapPage/FlexWrapPage';
import { FlexPage } from './pages/FlexPage';

import { Navbar } from './components/Navbar/Navbar';

import './styles.css';
import { AlignContentPage } from './pages/AlignContentPage';
import { Container } from 'components/Container';

export const App: React.FC = () => {
  return (
    <Container className="root-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<FlexDirectionPage />} />
        <Route path="/flex-direction" element={<FlexDirectionPage />} />
        <Route path="/justify-content" element={<JustifyContentPage />} />
        <Route path="/align-items" element={<AlignItemsPage />} />
        <Route path="/flex-wrap" element={<FlexWrapPage />} />
        <Route path="/align-content" element={<AlignContentPage />} />
        <Route path="/flex" element={<FlexPage />} />
      </Routes>
    </Container>
  );
};
