import React from 'react';
import {Link} from "gatsby";
import ThemeSelect from "./theme-select";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">JH</Link>
        <nav>
          <ul>
            <li>
              <Link to="/blog">Articles</Link>
            </li>
            <li>
              <Link to="/archive">Archive</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/uses">Uses</Link>
            </li>
          </ul>
        </nav>
        <div>
          <ThemeSelect />
        </div>
      </div>
    </header>
  );
}

export default Header;