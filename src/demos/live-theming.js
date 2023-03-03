import React from 'react';

const LiveTheming = () => {
  const [fontSize, setFontSize] = React.useState(14);
  const [bgColor, setBgColor] = React.useState('#262626');
  const [textColor, setTextColor] = React.useState('#ffffff');

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const handleBgColorChange = (event) => {
    setBgColor(event.target.value);
  };

  const handleTextColorChange = (event) => {
    setTextColor(event.target.value);
  };

  return (
    <div
      className="not-prose md:flex md:gap-8 p-8 md:p-12 bg-gray-100 dark:bg-gray-800 font-light"
      style={{
        '--background-color': `${bgColor}`,
        '--text-color': `${textColor}`,
        '--base-font-size': `${fontSize}px`,
        backgroundColor: 'var(--background-color)',
        color: 'var(--text-color)',
        fontSize: 'var(--base-font-size)'
      }}
    >
      <div className="md:w-1/2">
        <h2>Predefined Themes</h2>
        <div className="flex items-center mb-4">

        </div>
        <h2>Colors</h2>
        <div className="flex items-center mb-4">
          <label htmlFor="bgColor" className="block w-1/2">
            Background color
          </label>
          <input
            id="bgColor"
            type="color"
            value={bgColor}
            className="overflow-hidden w-6 h-6 rounded border border-gray-600 bg-transparent"
            onChange={handleBgColorChange}
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="textColor" className="block w-1/2">
            Text color
          </label>
          <input
            id="textColor"
            type="color"
            value={textColor}
            className="overflow-hidden w-6 h-6 rounded border border-gray-600 bg-transparent"
            onChange={handleTextColorChange}
          />
        </div>
        <h2>Typography</h2>
        <div className="flex items-center mb-4">
          <label htmlFor="fontSize" className="block w-1/2">
            Font size
          </label>
          <input
            id="fontSize"
            type="range"
            min="12"
            max="16"
            step="1"
            value={fontSize}
            onChange={handleFontSizeChange}
          />
        </div>
      </div>
      <div className="md:w-1/2">
        <p className="mb-6" style={{ fontSize: '2em', lineHeight: 1.25 }}>
          A live theme editor.
        </p>
        <p className="mb-6" style={{ fontSize: '1.25em', lineHeight: 1.5 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis commodi consequuntur delectus doloremque error esse.
        </p>
      </div>
    </div>
  );
}

export default LiveTheming;