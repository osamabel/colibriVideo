import { useState } from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={`relative ${menuOpen ? "overflow-hidden" : ""}  h-screen`}>
        <div className="fixed w-[638px] right-[200px] aspect-square bg-secondary rounded-full z-[-10] blur-[481px] opacity-10"></div>
        <div className="fixed w-[638px] top-[100px] left-[100px] aspect-square bg-primary z-[-10] rounded-full blur-[481px] opacity-10"></div>

        <Header menuOpen={menuOpen} toggleMenu={toggleMenu}/>
        <main className={`hide-scrollbar`}>
          <Outlet />
        </main>
        <Footer/>
    </div>
  )
}

export default Layout