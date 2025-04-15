import './App.css';
import { HashRouter as Router, Routes, Route, useLocation, Link  } from 'react-router-dom';
import MemeTable from './components/MemeTable';
import MemeList from './components/MemeList';
import { Navbar, NavbarItem} from '@heroui/react';

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return <div className="min-h-screen">
    <Navbar>
      <div className='navWrapper'>
        <NavbarItem className='link-text'>
          <Link className={currentPath === "/" ? "activeLink" : ""} to="/">Таблиця</Link>
        </NavbarItem>
        <NavbarItem className='link-text'>
          <Link className={currentPath === "/list" ? "activeLink" : ""} to="/list">Список</Link>
        </NavbarItem>
      </div>
    </Navbar>
    <Routes>
      <Route path="/" element={<MemeTable />} />
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