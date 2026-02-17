import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './index';

const meta: Meta<typeof Dropdown> = {
    title: 'UI/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    argTypes: {
        onSelect: { action: 'selected' },
    },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    args: {
        label: 'Choose Option',
        items: ['Option A', 'Option B', 'Option C'],
    },
};
