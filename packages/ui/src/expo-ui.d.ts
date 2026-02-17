declare module '@expo/ui/swift-ui' {
    import * as React from 'react';
    import type { StyleProp, ViewStyle, ViewProps } from 'react-native';

    export const Host: React.ComponentType<{
        style?: StyleProp<ViewStyle>;
        pointerEvents?: ViewProps['pointerEvents'];
        matchContents?: boolean;
        children?: React.ReactNode;
    }>;
    export const BottomSheet: React.ComponentType<{
        isOpened: boolean;
        onIsOpenedChange: (isOpened: boolean) => void;
        interactiveDismissDisabled?: boolean;
        presentationDetents?: Array<'medium' | 'large' | number>;
        presentationDragIndicator?: 'automatic' | 'visible' | 'hidden';
        children?: React.ReactNode;
    }>;
    export const VStack: React.ComponentType<{
        spacing?: number;
        children?: React.ReactNode;
    }>;
    export const Text: React.ComponentType<{
        children?: React.ReactNode;
    }>;
    export const Button: React.ComponentType<{
        label?: string;
        onPress?: () => void;
        children?: React.ReactNode;
        variant?: string;
    }>;
}
