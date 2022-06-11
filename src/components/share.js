import React from 'react';
import ShareIcon from '../images/share.svg';
import LinkIcon from '../images/link.svg';
import CheckIcon from '../images/check.svg';

const Share = ({ title, description }) => {
  const [hasNavigatorShare, setHasNavigatorShare] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

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

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  }

  const buttonClasses = "inline-flex items-center py-1.5 px-4 rounded-3xl bg-gray-100 hover:bg-gray-200 dark:bg-white dark:hover:bg-gray-200 text-sm font-semibold dark:text-gray-800";

  return (
    <div>
      {hasNavigatorShare ? (
        <button className={buttonClasses} onClick={sharePost}>
          <ShareIcon width="1em" height="1em" className="mr-1.5"  />
          Share
        </button>
      ) : (
        <button className={buttonClasses} onClick={copyLink}>
          {copied ? (
            <>
              <CheckIcon width="1em" height="1em" className="mr-1.5"  />
              Copied
            </>
          ) : (
            <>
              <LinkIcon width="1em" height="1em" className="mr-1.5"  />
              Copy link
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default Share;