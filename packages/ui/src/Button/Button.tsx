import { html, css } from 'react-strict-dom';
import { colors } from '../theme.css';

export interface ButtonProps {
  text: string;
  onPress?: () => void;
  style?: css.StyleXStyles;
  textStyle?: css.StyleXStyles;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button = ({
  text,
  onPress,
  style,
  textStyle,
  variant = 'primary',
  disabled = false,
}: ButtonProps) => {
  return (
    <html.button
      type="button"
      style={[
        styles.container,
        styles.interactive,
        variant === 'primary' && styles.primaryContainer,
        variant === 'secondary' && styles.secondaryContainer,
        disabled && styles.disabledContainer,
        style,
      ]}
      onClick={disabled ? undefined : onPress}
      disabled={disabled}
      aria-label={text}
      aria-disabled={disabled}
    >
      <html.span
        style={[
          styles.text,
          variant === 'primary' && styles.primaryText,
          variant === 'secondary' && styles.secondaryText,
          disabled && styles.disabledText,
          textStyle,
        ]}
      >
        {text}
      </html.span>
    </html.button>
  );
};

const styles = css.create({
  container: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 8,
    borderWidth: 0,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    display: 'flex',
  },
  interactive: {
    opacity: {
      default: 1,
      ':hover': 0.9,
      ':active': 0.8,
    },
  },
  primaryContainer: {
    backgroundColor: colors.primaryBg,
  },
  secondaryContainer: {
    backgroundColor: colors.secondaryBg,
  },
  disabledContainer: {
    backgroundColor: colors.disabledBg,
    opacity: 0.6,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
  primaryText: {
    color: colors.primaryText,
  },
  secondaryText: {
    color: colors.secondaryText,
  },
  disabledText: {
    color: colors.disabledText,
  },
});
