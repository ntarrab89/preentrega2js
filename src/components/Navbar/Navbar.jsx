import './Navbar.scss'
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget';


const links = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "TVs",
    href: "/productos/tvs",
  },
  {
    label: "Celulares",
    href: "/productos/celulares",
  },
  {
    label: "Laptops",
    href: "/productos/laptops",
  }
];

const Navbar = () => {
  return (
    <header className="bg-stone-700">
      <div className="container m-auto py-6 flex justify-between items-center">
        <img src={logo} className='logo' alt="Logo" />

        <nav className="flex gap-4">
          {links.map((link) => (

            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => (
                `text-lg font-mono uppercase font-semibold ${isActive ? "text-yellow-400" : "text-white"}`
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <CartWidget></CartWidget>
      </div>

    </header>
  );
};

export default Navbar;
