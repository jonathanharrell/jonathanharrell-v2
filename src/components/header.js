import React from 'react';
import {Link} from "gatsby";
import ThemeSelect from "./theme-select";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-contents">
          <Link to="/">JH</Link>
          <nav>
            <ul className="site-nav-list">
              <li>
                <Link to="/blog">Articles</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/uses">Uses</Link>
              </li>
              <li>
                <Link to="/timeline">Timeline</Link>
              </li>
            </ul>
          </nav>
          <div>
            <ThemeSelect />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;