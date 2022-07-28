import { List } from 'phosphor-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo_white.png';

import './styles.scss'

export function NavBar() {
  const sandwichMenu = useRef<HTMLDivElement>(null)
  const [windowWidth, setWindowWidth] = useState<number | null>(null)

  function handleOpenSandwichMenu() {
    document.body.style.overflow = 'hidden'
    sandwichMenu.current!.style.display = 'block'
  }

  function handleCloseSandwichMenu() {
    document.body.style.overflow = 'auto'
    sandwichMenu.current!.style.display = 'none'
  }
  
  function updateWindowDimensions() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    document.body.style.overflow = 'auto'
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
  }, [])

  return (
    <nav id="navbar">
      <a href="/" className="logo-link">
        <img src={Logo} alt="Psicopatolog Logo" />
        <span>Psicopatolog</span>
      </a>
      {windowWidth != null && windowWidth < 768 ? (
        <>
          <List size={32} weight="fill" color="#fff" onClick={handleOpenSandwichMenu}/>
          <div className="sandwich-menu" ref={sandwichMenu}>
            <span className="background" onClick={handleCloseSandwichMenu}></span>
            <div className="menu"> 
              <Link to="/">Início</Link>
              <Link to="/form">Formulário</Link>
              <Link to="/perfil">Perfil</Link>
              <Link to="/contato">Contato</Link>
              <Link to="/sobre-nos">Quem Somos</Link>
            </div>
          </div>
        </>
      ) : (
        <div className="plain-menu"> 
          <Link to="/">Início</Link>
          <Link to="/form">Formulário</Link>
          <Link to="/perfil">Perfil</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/sobre-nos">Quem Somos</Link>
        </div>
      )}
    </nav>
  )
}