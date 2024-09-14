import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Assuming you are using react-router-dom

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to top on route change
  }, [pathname]);

  return null; // It doesn't render anything in the UI
};

export default ScrollToTop;
