import React from 'react';

const LiveTheming = () => {
  const [fontSize, setFontSize] = React.useState(14);

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  return (
    <div
      className="not-prose md:flex md:gap-8 p-8 md:p-12 bg-gray-100 dark:bg-gray-800 rounded-lg font-light"
      style={{
        '--base-font-size': `${fontSize}px`,
        fontSize: 'var(--base-font-size)',
      }}
    >
      <div className="md:w-1/2">
        <input
          type="range"
          min="12"
          max="16"
          step="1"
          value={fontSize}
          onChange={handleFontSizeChange}
        />
      </div>
      <div className="md:w-1/2">
        <p className="mb-6" style={{ fontSize: '2em', lineHeight: 1.25 }}>
          A live theme editor with slick new CSS variables.
        </p>
        <p className="mb-6" style={{ fontSize: '1.25em', lineHeight: 1.5 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam eos quas. Ab amet dicta earum enim, esse excepturi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis commodi consequuntur delectus doloremque error esse mollitia nemo neque nesciunt nihil odit, perferendis praesentium, suscipit velit veniam voluptate. Autem, soluta!
        </p>
      </div>
    </div>
  );
}

export default LiveTheming;