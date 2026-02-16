import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
        variant: {
            control: 'select',
            options: ['primary', 'secondary'],
        },
        disabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        text: 'Primary Button',
        variant: 'primary',
    },
};
