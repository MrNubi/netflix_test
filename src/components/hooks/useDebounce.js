import React, { useEffect, useState } from 'react';

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // 딜레이 이후 debounced value 업데이트 부분
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // value가 바뀔 경우 settimeout 취소
      // 만약 벨류에 '건담' 이 들어갈 경우, '건담'이 delay초 이후에 setDebouncedValue에 들어감

      return () => {
        clearTimeout(handler);
        // 만약 내가 5초 안에 새로운 벨류 입력 시, 진행되던 delay초 타임아웃을 초기화(다시 delay초)
        // 결국, 다 치고 0.5초 이후에 debouncedValue에 들어가도록
      };
    },
    [value, delay] //value나 delay 바뀌었을 때 만 호출(useEffect)
  );

  return debouncedValue;
}
