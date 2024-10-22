import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/BackStoreLogo.svg'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />

      <nav>
        <NavLink activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/create">Create</NavLink>
      </nav>
    </header>
  )
}