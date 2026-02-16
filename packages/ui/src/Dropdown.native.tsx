import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';

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
                            <Text style={styles.itemText}>{item}</Text>
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
        padding: 24,
    },
    label: {
        marginBottom: 8,
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    trigger: {
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#212814',
        backgroundColor: '#14180e',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        alignSelf: 'stretch',
        elevation: 2,
    },
    triggerText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '500',
        flex: 1,
    },
    triggerIcon: {
        color: '#fff',
        fontSize: 14,
    },
    contentContainer: {
        flex: 1,
        padding: 24,
        alignItems: 'stretch',
    },
    sheetTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    item: {
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    itemPressed: {
        backgroundColor: '#f9f9f9',
    },
    itemSelected: {
        backgroundColor: '#e6f7ff',
    },
    itemText: {
        fontSize: 18,
        textAlign: 'center',
    },
});
