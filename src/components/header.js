import React from 'react';
import {Link} from "gatsby";
import ThemeSelect from "./theme-select";

const Header = () => {
  return (
    <header className="fixed z-20 w-full border-b border-neutral-800/10 dark:border-neutral-800 backdrop-blur bg-white/70 dark:bg-neutral-900/70">
      <div className="container flex items-center justify-between mx-auto py-3 px-8">
        <Link to="/">JH</Link>
        <nav className="ml-auto">
          <ul className="flex">
            <li className="ml-3 sm:ml-8">
              <Link to="/blog" className="font-semibold text-sm">
                Articles
              </Link>
            </li>
            <li className="ml-3 sm:ml-8">
              <Link to="/about" className="font-semibold text-sm">
                About
              </Link>
            </li>
            <li className="ml-3 sm:ml-8">
              <Link to="/uses" className="font-semibold text-sm">
                Uses
              </Link>
            </li>
          </ul>
        </nav>
        <div className="ml-4 sm:ml-8">
          <ThemeSelect />
        </div>
      </div>
    </header>
  );
}

export default Header;