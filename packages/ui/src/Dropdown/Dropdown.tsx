import { useState } from 'react';
import { html, css } from 'react-strict-dom';
import { colors } from '../theme.css';

export interface DropdownProps {
    label: string;
    items: string[];
    onSelect: (item: string) => void;
}

export const Dropdown = ({ label, items, onSelect }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <html.div style={styles.container}>
            <html.span style={styles.label}>{label}</html.span>

            <html.div
                role="button"
                tabIndex={0}
                style={[styles.trigger, styles.triggerInteractive]}
                onClick={() => {
                    console.log('Dropdown trigger clicked. Current isOpen:', isOpen);
                    setIsOpen(!isOpen);
                }}
                onKeyDown={(e: any) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        setIsOpen(!isOpen);
                    }
                }}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <html.span style={styles.triggerText}>
                    {selected || "Select an option..."}
                </html.span>
                <html.span style={styles.triggerIcon}>▼</html.span>
            </html.div>

            {isOpen && (
                <html.div
                    style={styles.dropdownList}
                    role="listbox"
                >
                    {items.map((item) => (
                        <html.div
                            role="option"
                            aria-selected={selected === item}
                            tabIndex={0}
                            key={item}
                            style={[
                                styles.item,
                                styles.itemInteractive,
                                selected === item && styles.itemSelected,
                            ]}
                            onClick={() => {
                                setSelected(item);
                                onSelect(item);
                                setIsOpen(false);
                            }}
                            onKeyDown={(e: any) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    setSelected(item);
                                    onSelect(item);
                                    setIsOpen(false);
                                }
                            }}
                        >
                            <html.span style={[
                                styles.itemText,
                                selected === item && styles.itemTextSelected,
                            ]}>{item}</html.span>
                        </html.div>
                    ))}
                </html.div>
            )}
        </html.div>
    );
};

const styles = css.create({
    container: {
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 100,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 12,
        paddingBottom: 12,
        overflow: 'visible',
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: 8, // theme.spacing.sm
        fontSize: 16, // theme.typography.size.md
        fontWeight: '600', // semibold
        color: colors.secondaryText,
    },
    trigger: {
        boxSizing: 'border-box',
        padding: 12, // theme.spacing.md
        borderRadius: 8, // theme.borderRadius.sm
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.defaultBorder,
        backgroundColor: colors.dropdownBg,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8, // theme.spacing.sm
        width: '100%', // FORCE bulletproof 100% width on web
        cursor: 'pointer',
    },
    triggerInteractive: {
        opacity: {
            default: 1,
            ':hover': 0.9,
            ':active': 0.85,
        },
    },
    triggerText: {
        fontSize: 14, // theme.typography.size.sm
        color: colors.secondaryText,
        fontWeight: '500', // medium
        flex: 1,
        textAlign: 'left',
    },
    triggerIcon: {
        color: colors.secondaryText,
        fontSize: 14, // theme.typography.size.sm
    },
    dropdownList: {
        position: 'absolute',
        top: 80, // force below the button explicitly by pixel height
        left: 24, // match container padding
        right: 24,
        marginTop: 4,
        backgroundColor: colors.dropdownBg,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: colors.defaultBorder,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 9999,
        overflow: 'visible',
        paddingTop: 4,
        paddingBottom: 4,
    },
    item: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 12,
        paddingRight: 12,
        width: '100%',
        backgroundColor: 'transparent',
        borderWidth: 0,
        textAlign: 'left',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 6,
        marginLeft: 4, // create small inner padding for hover effect
        marginRight: 4,
        boxSizing: 'border-box',
        maxWidth: 'calc(100% - 8px)',
    },
    itemInteractive: {
        backgroundColor: {
            default: 'transparent',
            ':hover': colors.defaultBorder, // Or colors.surfaceBg if you have a lighter variant
            ':active': colors.defaultBorder,
        },
    },
    itemSelected: {
        backgroundColor: '#B0D94420',
    },
    itemText: {
        fontSize: 14, // theme.typography.size.sm
        color: colors.secondaryText,
        textAlign: 'left',
    },
    itemTextSelected: {
        fontWeight: '600', // semibold
        color: colors.primaryBg, // highlight selected item
    },
});
