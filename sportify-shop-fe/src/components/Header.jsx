import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Logo-2.png";

// Add the useAuth hook import
import { useAuth } from "../redux/AuthContext"; // Adjust the path as needed

// Navigation items
const mainNav = [
  {
    display: "Home",
    path: "/nike_webshop",
  },
  {
    display: "Product",
    path: "/nike_webshop/catalog",
  },
  {
    display: "About",
    path: "/accessories",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  const headerRef = useRef(null);
  const menuLeft = useRef(null);

  // Retrieve the auth status from useAuth
  const { user } = useAuth(); // Assuming useAuth returns an object with a user field

  useEffect(() => {
    const scrollHandler = () => {
      if (headerRef.current) {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          headerRef.current.classList.add("shrink");
        } else {
          headerRef.current.classList.remove("shrink");
        }
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  // Toggles the menu on mobile view
  const menuToggle = () => {
    if (menuLeft.current) {
      menuLeft.current.classList.toggle("active");
    }
  };

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bx-chevron-left"></i>
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item ${
                  index === activeNav ? "active" : ""
                }`}
                onClick={menuToggle}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
          <div className="header__menu__item header__menu__right__item">
              <i className="bx bx-search"></i>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <Link to="/nike_webshop/cart">
                <i className="bx bx-shopping-bag"></i>
              </Link>
            </div>
            {user ? (
              // If user is logged in, show user icon
              <div className="header__menu__item header__menu__right__item">
                <i className="bx bx-user"></i>
              </div>
            ) : (
              // If not logged in, show Login and Register links
              <>
                <div className="header__menu__item header__menu__right__item">
                  <Link to="/Login">
                    Login
                  </Link>
                </div>
                <div className="header__menu__item header__menu__right__item">
                  <Link to="/Register">
                    Register
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
