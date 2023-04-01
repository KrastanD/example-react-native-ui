import React from 'react';
import { View } from 'react-native';
import { Button } from 'example-react-native-ui';
import type { ComponentMeta } from '@storybook/react-native';

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default ButtonMeta;

export const Basic = {};

export const Disabled = {
  args: {
    disabled: true,
    text: 'Disabled',
  },
};
