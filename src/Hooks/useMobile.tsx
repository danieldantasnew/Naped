import React from 'react';

const useMobile = (screen: string) => {
  const [match, setMatch] = React.useState(false);

  React.useEffect(() => {
    function handleMedia() {
      const mobile = window.matchMedia(`(${screen}`).matches;
      setMatch(mobile);
    }

    window.addEventListener('resize', handleMedia);
    handleMedia()
    return ()=> window.removeEventListener('resize', handleMedia);
  }, [screen]);

  return match;
}

export default useMobile;