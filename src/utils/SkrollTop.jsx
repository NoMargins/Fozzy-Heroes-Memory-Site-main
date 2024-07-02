import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Компонент для прокрутки сторінки догори при зміні маршруту.
 */
const SkrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default SkrollTop;
