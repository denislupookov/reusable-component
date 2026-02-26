import type { ReactNode } from 'react';
import { html, css } from 'react-strict-dom';
import { colors, spacing, borderRadius } from '../theme.css';

export interface NativeBottomSheetProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    children: ReactNode;
}

export const NativeBottomSheet = ({
    isOpen,
    onOpenChange,
    children,
}: NativeBottomSheetProps) => {
    if (!isOpen) {
        return null;
    }

    return (
        <html.div
            style={styles.overlay}
            onClick={() => onOpenChange(false)}
            role="none"
        >
            <html.div
                style={styles.dialog}
                role="dialog"
                aria-modal={true}
                onClick={(event) => event.stopPropagation()}
            >
                {children}
            </html.div>
        </html.div>
    );
};

const styles = css.create({
    overlay: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        backgroundColor: colors.overlayBg,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    dialog: {
        width: '88%',
        maxWidth: 520,
        backgroundColor: colors.surfaceBg,
        borderRadius: borderRadius.md,
        padding: spacing.xl,
        boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
    },
});
