'use client';

import { ArrowUpIcon } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

export function BackToTop() {
  const [show, setShow] = useState(false);
  const handleScroll = useCallback(() => {
    if (window.scrollY > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);
  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  return (
    <div
      className={`fixed bottom-2 right-2 z-50 ${show ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all`}
    >
      <button
        onClick={backToTop}
        aria-label="Back to top"
        type="button"
        className="size-10 rounded-md bg-pink-600 text-white"
      >
        <ArrowUpIcon className="mx-auto size-8" />
      </button>
    </div>
  );
}
