import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { BottomSheetModal, BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
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
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const handleSheetChanges = useCallback((index: number) => {
        if (index === -1) {
            onOpenChange(false);
        }
    }, [onOpenChange]);

    const handleDismiss = useCallback(() => {
        onOpenChange(false);
    }, [onOpenChange]);

    useEffect(() => {
        if (isOpen) {
            bottomSheetModalRef.current?.present();
        } else {
            bottomSheetModalRef.current?.dismiss();
        }
    }, [isOpen]);

    const renderBackdrop = useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
                pressBehavior="close"
            />
        ),
        []
    );

    return (
        <BottomSheetModal
            ref={bottomSheetModalRef}
            onChange={handleSheetChanges}
            onDismiss={handleDismiss}
            snapPoints={useMemo(() => ['50%'], [])}
            enableDynamicSizing={true}
            enablePanDownToClose={true}
            backdropComponent={renderBackdrop}
            handleIndicatorStyle={{ backgroundColor: theme.colors.border.light }}
            backgroundStyle={{ backgroundColor: theme.colors.background.surface }}
        >
            <BottomSheetView style={styles.contentContainer}>
                {children}
            </BottomSheetView>
        </BottomSheetModal>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
    },
});
