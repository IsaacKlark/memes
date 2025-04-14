import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MemeTable from './components/MemeTable';
import MemeList from './components/MemeList';
import { Navbar } from '@heroui/react';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar>
          <Link to="/table">Таблиця</Link>
          <Link to="/list">Список</Link>
        </Navbar>
        <Routes>
          <Route path="/table" element={<MemeTable />} />
          <Route path="/list" element={<MemeList />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
