import React from 'react';
import {Link} from "gatsby";
import ThemeSelect from "./theme-select";

const Header = () => {
  return (
    <header className="container flex items-center justify-between mx-auto py-4 px-8">
      <Link to="/">JH</Link>
      <nav className="ml-auto">
        <ul className="flex">
          <li className="ml-3 sm:ml-4">
            <Link to="/blog" className="py-1 px-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-semibold">
              Articles
            </Link>
          </li>
          <li className="ml-3 sm:ml-4">
            <Link to="/about" className="py-1 px-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-semibold">
              About
            </Link>
          </li>
          <li className="ml-3 sm:ml-4">
            <Link to="/uses" className="py-1 px-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-semibold">
              Uses
            </Link>
          </li>
        </ul>
      </nav>
      <div className="ml-4 sm:ml-6">
        <ThemeSelect />
      </div>
    </header>
  );
}

export default Header;