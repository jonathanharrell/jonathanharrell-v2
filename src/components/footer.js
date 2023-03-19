import React from 'react';

const Footer = () => {
  const presentYear = new Date().getFullYear();

  return (
    <footer className="container mx-auto lg:mt-6 py-8 px-8 text-sm text-neutral-500">
      <p>@ 2017-{presentYear} Jonathan Harrell</p>
    </footer>
  );
}

export default Footer;