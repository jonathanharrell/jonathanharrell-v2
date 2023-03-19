import React, {useCallback} from 'react';
import ShareIcon from '../images/share.svg';

const Share = ({ title, description }) => {
  const [hasNavigatorShare, setHasNavigatorShare] = React.useState(false);

  React.useEffect(() => {
    setHasNavigatorShare(!!navigator.share);
  }, []);

  const sharePost = useCallback(async () => {
    try {
      await navigator.share({
        url: window.location.href,
        title,
        text: description
      })
    } catch (error) {
      console.error(error)
    }
  }, [title, description]);

  const buttonClasses = "inline-flex items-center py-1.5 px-4 rounded-3xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-sm font-semibold dark:text-white";

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