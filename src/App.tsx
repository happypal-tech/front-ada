import { Route, Routes } from 'react-router-dom';

import { AppHeader } from './components/AppHeader/AppHeader';
import { AboutPage } from './pages/About/About';
import { HomePage } from './pages/Home/Home';

const App = () => {
  return (
    <div>
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export default App;
