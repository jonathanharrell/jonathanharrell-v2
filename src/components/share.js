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

  return (
    <div>
      {hasNavigatorShare && (
        <button onClick={sharePost}>
          <ShareIcon width="1em" height="1em"  />
          Share
        </button>
      )}
    </div>
  );
};

export default Share;