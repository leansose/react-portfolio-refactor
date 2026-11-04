import { useEffect, useState } from 'react';

const SCROLL_THRESHOLD = 300;

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a href="#top" aria-label="back to top">
      <img src="/icons/totop.webp" alt="" />
    </a>
  );
}

export default BackToTop;
