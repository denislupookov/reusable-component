import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  ViewStyle,
  TextStyle,
  PressableStateCallbackType,
  StyleProp,
} from 'react-native';
import { theme } from '../theme';

export interface ButtonProps {
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  style,
  textStyle,
  variant = 'primary',
  disabled = false,
}) => {
  return (
    <Pressable
      style={(state: PressableStateCallbackType & { hovered?: boolean }) => [
        styles.container,
        variant === 'primary' && styles.primaryContainer,
        variant === 'secondary' && styles.secondaryContainer,
        disabled && styles.disabledContainer,
        (state.pressed || state.hovered) && !disabled && styles.pressed,
        style,
      ]}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={text}
      accessibilityState={{ disabled }}
    >
      <Text
        style={[
          styles.text,
          variant === 'primary' && styles.primaryText,
          variant === 'secondary' && styles.secondaryText,
          disabled && styles.disabledText,
          textStyle,
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: theme.spacing.xs,
  },
  primaryContainer: {
    backgroundColor: theme.colors.background.primary,
  },
  secondaryContainer: {
    backgroundColor: theme.colors.background.secondary,
  },
  disabledContainer: {
    backgroundColor: theme.colors.background.disabled,
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    fontSize: theme.typography.size.sm,
    fontWeight: theme.typography.weight.medium,
  },
  primaryText: {
    color: theme.colors.text.primary,
  },
  secondaryText: {
    color: theme.colors.text.secondary,
  },
  disabledText: {
    color: theme.colors.text.disabled,
  },
});
