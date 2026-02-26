import { css } from 'react-strict-dom';

/**
 * Design tokens as StyleX CSS variables.
 */
export const colors = css.defineVars({
    primaryBg: '#B0D944',
    secondaryBg: 'transparent',
    disabledBg: '#212814',
    dropdownBg: '#14180e',
    overlayBg: 'rgba(0,0,0,0.5)',
    surfaceBg: '#212814',
    primaryText: '#15180E',
    secondaryText: '#A1AFA6',
    disabledText: '#435123',
    defaultBorder: '#212814',
    lightBorder: '#eee',
});

export const spacing = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
} as const;

export const borderRadius = {
    sm: 8,
    md: 16,
} as const;

export const typography = {
    size: {
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
    },
    weight: {
        medium: '500' as const,
        semibold: '600' as const,
        bold: 'bold' as const,
    },
} as const;
