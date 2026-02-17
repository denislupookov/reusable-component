import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { theme } from '../theme';

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
                            <Text style={[
                                styles.itemText,
                                selected === item && styles.itemTextSelected
                            ]}>{item}</Text>
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
        fontSize: theme.typography.size.sm,
        marginBottom: theme.spacing.xs,
        fontWeight: theme.typography.weight.medium,
        color: theme.colors.text.secondary,
    },
    trigger: {
        borderWidth: 1,
        borderColor: theme.colors.border.default,
        borderRadius: theme.borderRadius.sm,
        padding: theme.spacing.md,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.colors.background.dropdown,
        gap: theme.spacing.sm,
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
    dropdownList: {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        marginTop: theme.spacing.xs,
        backgroundColor: theme.colors.background.surface,
        borderWidth: 1,
        borderColor: theme.colors.border.light,
        borderRadius: theme.borderRadius.sm,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    item: {
        padding: theme.spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border.light,
    },
    itemPressed: {
        backgroundColor: '#f5f5f5', // Consider adding to theme if used often
    },
    itemSelected: {
        backgroundColor: theme.colors.background.primary + '20', // 20% opacity
    },
    itemText: {
        fontSize: theme.typography.size.md,
        color: theme.colors.text.primary,
    },
    itemTextSelected: {
        fontWeight: theme.typography.weight.semibold,
        color: theme.colors.text.primary,
    },
});
