import React from 'react';
import { StyleSheet, Text, Pressable, ViewStyle, TextStyle } from 'react-native';

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  style,
  textStyle,
  variant = 'primary',
  disabled = false
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        variant === 'primary' && styles.primaryContainer,
        variant === 'secondary' && styles.secondaryContainer,
        disabled && styles.disabledContainer,
        style,
        pressed && !disabled && styles.pressed
      ]}
      onPress={disabled ? undefined : onClick}
      disabled={disabled}
    >
      <Text style={[
        styles.text,
        variant === 'primary' && styles.primaryText,
        variant === 'secondary' && styles.secondaryText,
        disabled && styles.disabledText,
        textStyle
      ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  primaryContainer: {
    backgroundColor: '#B0D944',
  },
  secondaryContainer: {
    backgroundColor: 'transparent',
  },
  disabledContainer: {
    backgroundColor: '#212814',
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
  primaryText: {
    color: 'black',
  },
  secondaryText: {
    color: 'white',
  },
  disabledText: {
    color: '#435123',
  },
});
