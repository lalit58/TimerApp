import React, {useCallback, useRef} from 'react';
import {TouchableOpacity} from 'react-native';

const DebounceTouchableOpacity = ({onPress, debounceTime = 500, ...props}) => {
  const timerRef = useRef(null);

  const debouncedOnPress = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      onPress?.();
      timerRef.current = null;
    }, debounceTime);
  }, [onPress, debounceTime]);

  return <TouchableOpacity onPress={debouncedOnPress} {...props} />;
};

export default DebounceTouchableOpacity;
