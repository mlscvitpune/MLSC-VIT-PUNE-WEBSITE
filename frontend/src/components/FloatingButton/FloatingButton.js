import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useWindowScroll } from 'react-use';
import './FloatingIcon.css';

const FloatingButton = () => {
  const { pathname } = useLocation();
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pathname === '/team' && pageYOffset > 2600) {
      setVisiblity(true);
    } else if (pathname !== '/team' && pageYOffset > 1400) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
    // eslint-disable-next-line
  }, [pageYOffset]);

  const scrollToTop = () =>
    window.scrollTo({
      top: pathname === '/team' ? 1900 : 0,
      behavior: 'smooth',
    });

  if (!visible) {
    return false;
  }

  return (
    <div
      className="scroll-to-top cursor-pointer text-center"
      onClick={scrollToTop}
    >
      <i className="icon fas fa-chevron-up "></i>
    </div>
  );
};

export default FloatingButton;
