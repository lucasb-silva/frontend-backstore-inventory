import { IoAdd, IoHomeOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/BackStoreLogo.svg';
import './Header.css';

// Cabeçalho da página, contendo logo e opções "Início" e "Novo Item"
export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />

      <nav>
        <NavLink activeclassname="active" to="/"> <IoHomeOutline /> Início</NavLink>
        <NavLink activeclassname="active" to="/create"> <IoAdd /> Novo Item</NavLink>
      </nav>
    </header>
  )
}