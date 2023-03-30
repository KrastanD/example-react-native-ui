import * as React from 'react';

import StorybookUIRoot from '../.storybook';
import { Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <StorybookUIRoot />;
}
