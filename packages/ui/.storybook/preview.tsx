import type { Preview } from '@storybook/react-vite';
import React from 'react';
import { View } from 'react-native';

const preview: Preview = {
  decorators: [
    (Story) => (
      <View style={{ height: '100vh', width: '100%', backgroundColor: '#15180E', alignItems: 'center', justifyContent: 'center' } as any}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
  },
};

export default preview;