import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from '../src/theme.jsx';

import LandingPage from './pages/LandingPage';
import Login from '../src/pages/Login';
import PreQuiz from './pages/PreQuiz';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Register from './pages/Register';
import Community from './pages/Community';
import Toolkit from './pages/Toolkit';
import HornsEffect from './pages/HornsEffect';


const App = () => {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className='app'>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pre-quiz" element={<PreQuiz />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/community" element={<Community />} />
          <Route path="/toolkit" element={<Toolkit />} />
          <Route path="/toolkit/horns-effect" element={<HornsEffect />} />

        </Routes>
    </ThemeProvider>
    </div>
  );
};

export default App;
