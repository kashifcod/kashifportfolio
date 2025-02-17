import React, { useState, useEffect } from 'react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-top btn btn-primary ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}

export default ScrollToTop;