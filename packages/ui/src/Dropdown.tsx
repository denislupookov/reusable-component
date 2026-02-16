import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export interface DropdownProps {
    label: string;
    items: string[];
    onSelect: (item: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ label, items, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <Pressable
                style={styles.trigger}
                onPress={() => setIsOpen(!isOpen)}
            >
                <Text style={styles.triggerText}>
                    {selected || "Select an option..."}
                </Text>
                <Text style={styles.triggerIcon}>▼</Text>
            </Pressable>

            {isOpen && (
                <View style={styles.dropdownList}>
                    {items.map((item) => (
                        <Pressable
                            key={item}
                            style={({ pressed }: { pressed: boolean }) => [
                                styles.item,
                                pressed && styles.itemPressed,
                                selected === item && styles.itemSelected
                            ]}
                            onPress={() => {
                                setSelected(item);
                                onSelect(item);
                                setIsOpen(false);
                            }}
                        >
                            <Text style={styles.itemText}>{item}</Text>
                        </Pressable>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: 'stretch',
        zIndex: 100
    },
    label: {
        fontSize: 14,
        marginBottom: 4,
        fontWeight: '500',
        color: '#fff',
    },
    trigger: {
        borderWidth: 1,
        borderColor: '#212814',
        borderRadius: 8,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#14180e',
        gap: 8,
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
    dropdownList: {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        marginTop: 4,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 8,
        elevation: 5,
    },
    item: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    itemPressed: {
        backgroundColor: '#f5f5f5',
    },
    itemSelected: {
        backgroundColor: '#e6f7ff',
    },
    itemText: {
        fontSize: 16,
    },
});
