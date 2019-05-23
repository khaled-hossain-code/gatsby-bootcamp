import React from "react"
import { Link } from "gatsby"

// import './header.module.scss';
import { navList, navItem, header, title, activeNavItem } from "./header.module.scss";

const Header = () => {
  return (
    <header className={header}>
      <h1>
        <Link className={title} to="/">
          khaled hossain
        </Link>
      </h1>
      <nav>
        <ul className={navList}>
          <li>
            <Link className={navItem} activeClassName={activeNavItem} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={navItem} activeClassName={activeNavItem} to="/blog" >
              Blog
            </Link>
          </li>
          <li>
            <Link className={navItem} activeClassName={activeNavItem} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={navItem} activeClassName={activeNavItem} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
