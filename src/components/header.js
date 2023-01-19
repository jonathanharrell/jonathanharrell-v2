import React from 'react';
import {Link} from "gatsby";
import ThemeSelect from "./theme-select";

const Header = () => {
  return (
    <header className="container flex items-center justify-between mx-auto py-4 px-8">
      <Link to="/">JH</Link>
      <nav className="ml-auto font-idealSans">
        <ul className="flex">
          <li className="ml-3 sm:ml-8">
            <Link to="/blog" className="border-b-4 border-transparent hover:border-orange-300 dark:hover:bg-gray-700 text-sm font-semibold">
              Articles
            </Link>
          </li>
          <li className="ml-3 sm:ml-8">
            <Link to="/about" className="border-b-4 border-transparent hover:border-orange-300 dark:hover:bg-gray-700 text-sm font-semibold">
              About
            </Link>
          </li>
          <li className="ml-3 sm:ml-8">
            <Link to="/uses" className="border-b-4 border-transparent hover:border-orange-300 dark:hover:bg-gray-700 text-sm font-semibold">
              Uses
            </Link>
          </li>
        </ul>
      </nav>
      <div className="ml-4 sm:ml-8">
        <ThemeSelect />
      </div>
    </header>
  );
}

export default Header;