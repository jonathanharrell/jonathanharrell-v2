import React from 'react';

const Footer = () => {
  const presentYear = new Date().getFullYear();

  return (
    <footer className="container">
      <p>@ 2017-{presentYear} Jonathan Harrell</p>
    </footer>
  );
}

export default Footer;