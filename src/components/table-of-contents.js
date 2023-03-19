import React from 'react';

const TableOfContents = ({ tableOfContents }) => {
  return (
    <>
      <h2 className="mb-4 text-sm font-semibold text-neutral-500">
        Table of contents
      </h2>
      <ul>
        {tableOfContents.items.map(item => (
          <li key={item.title} className="mb-2.5 last:mb-0">
            <a href={item.url} className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-300">
              {item.title}
            </a>
            {item.items && (
              <ul className="ml-4 mt-3 mb-4">
                {item.items.map(i => (
                  <li key={i.title} className="mb-1.5">
                    <a href={i.url} className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-300">
                      {i.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TableOfContents;