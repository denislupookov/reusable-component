import React from 'react';
import { StyleSheet, Modal, Pressable } from 'react-native';
import { theme } from '../theme';

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
        <Modal
            visible={isOpen}
            transparent
            animationType="fade"
            onRequestClose={() => onOpenChange(false)}
        >
            <Pressable style={styles.overlay} onPress={() => onOpenChange(false)}>
                <Pressable style={styles.dialog} onPress={(e) => e.stopPropagation()}>
                    {children}
                </Pressable>
            </Pressable>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: theme.colors.background.overlay,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialog: {
        width: '88%',
        maxWidth: 520,
        backgroundColor: theme.colors.background.surface,
        borderRadius: theme.borderRadius.md,
        padding: theme.spacing.xl,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 16,
        elevation: 8,
    },
});
