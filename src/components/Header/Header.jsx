import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/BackStoreLogo.svg'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />

      <nav>
        <NavLink activeclassname="active" to="/">Home</NavLink>
        <NavLink activeclassname="active" to="/create">Create</NavLink>
      </nav>
    </header>
  )
}