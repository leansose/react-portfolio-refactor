import { useEffect, useState } from 'react';
import { publicUrl } from '../utils/url';

const SCROLL_THRESHOLD = 300;

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label="back to top"
      tabIndex={visible ? 0 : -1}
      className={`btn btn-primary fixed bottom-6 right-6 z-10 size-12 p-2 transition-opacity duration-200 ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <img src={publicUrl('icons/totop.webp')} alt="" width={40} height={40} className="size-full object-contain" />
    </a>
  );
}

export default BackToTop;
