import React from 'react';
import {StatusBar} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

const FocusAwareStatusBar = ({backgroundColor, barStyle = 'default'}) => {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(barStyle);
      StatusBar.setBackgroundColor(backgroundColor);
    }, [backgroundColor, barStyle]),
  );

  return null;
};

export default FocusAwareStatusBar;
