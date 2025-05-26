import {
  Navbar as FlowNavbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavbarLink,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { menuItems } from "./Menu.jsx";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white mt-2">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-4">
        <FlowNavbar
          fluid
          rounded
          className="!bg-white w-full px-0 py-0 shadow-none"
        >
          <NavbarBrand as={Link} to="/" className="flex items-center space-x-3">
            <img src={Logo} className="h-10" alt="Logo Crysense" />
          </NavbarBrand>

          <NavbarToggle className="text-secondary hover:bg-secondary-light focus:ring-2 focus:ring-secondary" />

          <NavbarCollapse className="font-open-sans md:space-x-8 rtl:space-x-reverse mt-4 md:mt-0">
            {menuItems.map((item, index) => (
              <NavbarLink
                key={index}
                as={Link}
                to={item.path}
                className={`block py-2 px-2 ${
                  location.pathname === item.path
                    ? "!text-secondary font-bold"
                    : "!text-primary-darkest"
                }`}
              >
                {item.label}
              </NavbarLink>
            ))}
          </NavbarCollapse>
        </FlowNavbar>
      </div>
    </nav>
  );
};

export default Navbar;