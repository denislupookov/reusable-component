export const theme = {
    colors: {
        background: {
            primary: '#B0D944',
            secondary: 'transparent',
            disabled: '#212814',
            dropdown: '#14180e',
            overlay: 'rgba(0,0,0,0.5)',
            surface: 'white',
        },
        text: {
            primary: 'black',
            secondary: 'white',
            disabled: '#435123',
        },
        border: {
            default: '#212814',
            light: '#eee',
        },
    },
    spacing: {
        xs: 4,
        sm: 8,
        md: 12,
        lg: 16,
        xl: 24,
    },
    borderRadius: {
        sm: 8,
        md: 16,
    },
    typography: {
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
    },
};

export type Theme = typeof theme;
