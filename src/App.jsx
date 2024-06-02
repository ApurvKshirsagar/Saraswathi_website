import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Secretary from './pages/Secretary';
import Calendar from './pages/Calendar';
import Complaint from './pages/Complaint';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/complaint' element={<Complaint />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/secretary' element={<Secretary />} />
      </Routes>
    </Router>
  );
}

export default App;
