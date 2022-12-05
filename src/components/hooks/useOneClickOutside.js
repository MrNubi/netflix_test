import React, { useEffect } from 'react';

export default function useOneClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      console.log('ref', ref.current);
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
      // 컴포넌트가 꺼졌으면 리스너도 같이 없어지도록
    };
  }, [ref, handler]);

  return <div>useOneClickOutside</div>;
}
