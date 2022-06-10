import React from 'react';

const Figure = ({ src, alt = '', caption, children, wide = false }) => {
  return (
    <figure className={wide ? 'md:-mx-16 lg:-mx-32' : ''}>
      {children ? children : <img src={src} alt={alt}/>}
      {caption && (
        <figcaption className={wide ? 'md:mx-16 lg:mx-32' : ''}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default Figure;