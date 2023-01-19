import React from 'react';
import ShareIcon from '../images/share.svg';

const Share = ({ title, description }) => {
  const [hasNavigatorShare, setHasNavigatorShare] = React.useState(false);

  React.useEffect(() => {
    setHasNavigatorShare(!!navigator.share);
  }, []);

  const sharePost = async () => {
    try {
      await navigator.share({
        url: window.location.href,
        title,
        text: description
      })
    } catch (error) {
      console.error(error)
    }
  }

  const buttonClasses = "inline-flex items-center py-1.5 px-4 rounded-3xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-sm font-semibold dark:text-white";

  return (
    <div>
      {hasNavigatorShare && (
        <button className={buttonClasses} onClick={sharePost}>
          <ShareIcon width="1em" height="1em" className="mr-1.5"  />
          Share
        </button>
      )}
    </div>
  );
};

export default Share;