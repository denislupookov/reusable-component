import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { theme } from '../theme';

export interface DropdownProps {
    label: string;
    items: string[];
    onSelect: (item: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ label, items, onSelect }) => {
    const [selected, setSelected] = useState<string | null>(null);

    const bottomSheetRef = useRef<BottomSheetModal>(null);

    const handleSheetChanges = useCallback((index: number) => {
    }, []);

    const handleOpenPress = () => {
        bottomSheetRef.current?.present();
    };

    const handleClosePress = () => {
        bottomSheetRef.current?.dismiss();
    };

    const handleSelect = (item: string) => {
        setSelected(item);
        onSelect(item);
        handleClosePress();
    };

    const snapPoints = useMemo(() => ['50%'], []);

    const renderBackdrop = useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                {...props}
                appearsOnIndex={0}
                disappearsOnIndex={-1}
                pressBehavior="close"
            />
        ),
        []
    );

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <Pressable style={styles.trigger} onPress={handleOpenPress}>
                <Text style={styles.triggerText}>
                    {selected || "Select from Bottom Sheet..."}
                </Text>
                <Text style={styles.triggerIcon}>▼</Text>
            </Pressable>

            <BottomSheetModal
                ref={bottomSheetRef}
                onChange={handleSheetChanges}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                backdropComponent={renderBackdrop}
                handleIndicatorStyle={{ backgroundColor: theme.colors.border.light }}
            >
                <BottomSheetView style={styles.contentContainer as any}>
                    <Text style={styles.sheetTitle}>Select an Option</Text>
                    {items.map((item) => (
                        <Pressable
                            key={item}
                            style={({ pressed }: { pressed: boolean }) => [
                                styles.item,
                                pressed && styles.itemPressed,
                                selected === item && styles.itemSelected
                            ]}
                            onPress={() => handleSelect(item)}
                        >
                            <Text style={[
                                styles.itemText,
                                selected === item && styles.itemTextSelected
                            ]}>{item}</Text>
                        </Pressable>
                    ))}
                </BottomSheetView>
            </BottomSheetModal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: theme.spacing.xl,
    },
    label: {
        marginBottom: theme.spacing.sm,
        fontSize: theme.typography.size.md,
        fontWeight: theme.typography.weight.semibold,
        color: theme.colors.text.secondary,
    },
    trigger: {
        padding: theme.spacing.md,
        borderRadius: theme.borderRadius.sm,
        borderWidth: 1,
        borderColor: theme.colors.border.default,
        backgroundColor: theme.colors.background.dropdown,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: theme.spacing.sm,
        alignSelf: 'stretch',
        elevation: 2,
    },
    triggerText: {
        fontSize: theme.typography.size.sm,
        color: theme.colors.text.secondary,
        fontWeight: theme.typography.weight.medium,
        flex: 1,
    },
    triggerIcon: {
        color: theme.colors.text.secondary,
        fontSize: theme.typography.size.sm,
    },
    contentContainer: {
        flex: 1,
        padding: theme.spacing.xl,
        alignItems: 'stretch',
    },
    sheetTitle: {
        fontSize: theme.typography.size.xl,
        fontWeight: theme.typography.weight.bold,
        marginBottom: theme.typography.size.xl,
        textAlign: 'center',
        color: theme.colors.text.primary,
    },
    item: {
        paddingVertical: theme.spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border.light,
    },
    itemPressed: {
        backgroundColor: '#f9f9f9',
    },
    itemSelected: {
        backgroundColor: theme.colors.background.primary + '20',
    },
    itemText: {
        fontSize: theme.typography.size.lg,
        textAlign: 'center',
        color: theme.colors.text.primary,
    },
    itemTextSelected: {
        fontWeight: theme.typography.weight.semibold,
    },
});
