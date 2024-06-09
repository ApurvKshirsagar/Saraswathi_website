import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Secretary from './pages/Secretary.jsx';
import Calendar from './pages/Calendar.jsx';
import Complaint from './pages/Complaint.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/complaint' element={<Complaint />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/secretary' element={<Secretary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
