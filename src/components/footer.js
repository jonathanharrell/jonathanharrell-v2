import React from 'react';

const Footer = () => {
  const presentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-contents">
          <p>© 2017-{presentYear} Jonathan Harrell</p>
          <ul className="share-list">
            <li><a href="">tw</a></li>
            <li><a href="">gh</a></li>
            <li><a href="">li</a></li>
            <li><a href="">in</a></li>
            <li><a href="">rss</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;