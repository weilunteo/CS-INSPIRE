import { BrowserRouter, Routes, Route } from 'react-router-dom';


import LandingPage from './pages/LandingPage';
import Login from '../src/pages/Login';
import PreQuiz from './pages/PreQuiz';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pre-quiz" element={<PreQuiz />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
