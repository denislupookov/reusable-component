import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomSheet, Host } from '@expo/ui/swift-ui';

export interface NativeBottomSheetProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    children: React.ReactNode;
}

export const NativeBottomSheet: React.FC<NativeBottomSheetProps> = ({
    isOpen,
    onOpenChange,
    children,
}) => {
    return (
        <Host
            style={StyleSheet.absoluteFill}
            pointerEvents={isOpen ? 'auto' : 'none'}
        >
            <BottomSheet
                isOpened={isOpen}
                onIsOpenedChange={onOpenChange}
                presentationDetents={[0.4]}
            >
                {children}
            </BottomSheet>
        </Host>
    );
};
