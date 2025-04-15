import './App.css';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MemeTable from './components/MemeTable';
import MemeList from './components/MemeList';
import { Navbar, NavbarItem, Link } from '@heroui/react';

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return <div className="min-h-screen">
    <Navbar>
      <div className='navWrapper'>
        <NavbarItem className='link-text'>
          <Link color={currentPath === "/table" ? "primary" : "foreground"} href="/table">Таблиця</Link>
        </NavbarItem>
        <NavbarItem className='link-text'>
          <Link color={currentPath === "/list" ? "primary" : "foreground"} href="/list">Список</Link>
        </NavbarItem>
      </div>
    </Navbar>
    <Routes>
      <Route path="/" element={<Navigate to="/table" replace />} />
      <Route path="/table" element={<MemeTable />} />
      <Route path="/list" element={<MemeList />} />
    </Routes>
  </div>
}

function App() {

  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default App;