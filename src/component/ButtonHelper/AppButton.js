import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {Colors} from '../../utils/theme/colors';
import {PixelPerfect} from '../../utils/pixelSetup';
import DebounceTouchableOpacity from './debounceTouchableOpacity';

const AppButton = ({
  isLoading,
  buttonText,
  type = 'primary',
  enabled = true,
  handleSubmit,
  buttonContainer,
  buttonTextStyle,
  renderIcon,
  textNumberOfLines,
}) => {
  const buttonStyles = {
    primary: {
      container: styles.buttonPrimary,
      text: styles.textPrimary,
    },
    secondary: {
      container: styles.buttonSecondary,
      text: styles.textSecondary,
    },
    danger: {
      container: styles.buttonDanger,
      text: styles.textDanger,
    },
  };

  const {container, text} = buttonStyles[type] || buttonStyles.primary;

  return isLoading ? (
    <View
      style={[
        styles.buttonBase,
        container,
        !enabled && styles.disabled,
        buttonContainer,
      ]}>
      <ActivityIndicator
        color={type === 'secondary' ? Colors.BLACK : Colors.WHITE}
      />
    </View>
  ) : (
    <DebounceTouchableOpacity
      disabled={!enabled}
      onPress={() => enabled && handleSubmit()}
      style={[
        styles.buttonBase,
        container,
        !enabled && styles.disabled,
        buttonContainer,
      ]}>
      {renderIcon && renderIcon()}
      <Text
        style={[styles.textBase, text, buttonTextStyle]}
        numberOfLines={textNumberOfLines ?? 1}>
        {buttonText}
      </Text>
    </DebounceTouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  buttonBase: {
    height: PixelPerfect.heightPixel(50),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    width: '100%',
  },
  textBase: {
    fontSize: PixelPerfect.fontPixel(16),
  },
  buttonPrimary: {
    backgroundColor: Colors._31A52B,
    borderColor: Colors._31A52B,
  },
  textPrimary: {
    color: Colors.WHITE,
  },
  buttonSecondary: {
    backgroundColor: Colors._F0F0F0,
    borderColor: Colors._F0F0F0,
  },
  textSecondary: {
    color: Colors.BLACK,
  },
  buttonDanger: {
    backgroundColor: Colors._CE4949,
    borderWidth: 0,
  },
  textDanger: {
    color: Colors.WHITE,
  },
  disabled: {
    opacity: 0.6,
  },
});
