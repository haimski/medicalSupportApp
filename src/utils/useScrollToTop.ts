import { useEffect } from 'react';

const useScrollToTop = (selector: string = '#page-content') => {
  useEffect(() => {
    const el = document.querySelector(selector);
    el?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selector]);
};

export default useScrollToTop;
