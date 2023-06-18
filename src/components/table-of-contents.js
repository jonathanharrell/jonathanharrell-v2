import React from 'react';

const TableOfContents = ({ tableOfContents }) => {
  return (
    <nav className="toc">
      <h2 className="sr-only">Table of contents</h2>
      <ol className="toc-list">
        {tableOfContents.items.map(item => (
          <li key={item.title}>
            <a href={item.url}>{item.title}</a>
            {/*{item.items && (*/}
            {/*  <ol type="a">*/}
            {/*    {item.items.map(i => (*/}
            {/*      <li key={i.title}>*/}
            {/*        <a href={i.url}>{i.title}</a>*/}
            {/*      </li>*/}
            {/*    ))}*/}
            {/*  </ol>*/}
            {/*)}*/}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default TableOfContents;