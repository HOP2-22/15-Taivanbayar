import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

export const Header = () => {
  const [offsetY, setOffsetY] = useState(0);

  const style = {
    scrollingNavbar: {
      backgroundColor: offsetY === 0 ? "transparent" : "white",
    },
    scrollingLinks: {
      color: offsetY === 0 ? "" : "#0bbef2",
    },
    scrollingGetAccessBut: {
      border: offsetY === 0 ? "" : "2px solid #0bbef2",
      color: offsetY === 0 ? "" : "#0bbef2",
    },
  };

  useEffect(() => {
    const handler = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav style={style.scrollingNavbar}>
      <div className="nav-left">
        <Link className="top-logo" to="HomePage" style={style.scrollingLinks}>
          team
        </Link>
        <div className="top-dot"></div>
      </div>
      <div className="top-right">
        <Link
          className="linked-navs"
          to="Products"
          style={style.scrollingLinks}
        >
          Products
        </Link>
        <Link
          className="linked-navs"
          style={style.scrollingLinks}
          to="ServicePage"
        >
          Services
        </Link>
        <Link
          className="linked-navs"
          style={style.scrollingLinks}
          to="/ContactPage"
        >
          Contact
        </Link>
        <Link
          className="linked-navs"
          style={style.scrollingLinks}
          to="LoginPage"
        >
          Log in
        </Link>
        <Link className="get-access-but" style={style.scrollingGetAccessBut}>
          Get Access
        </Link>
      </div>
    </nav>
  );
};

export default Header;
