import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({
  onPress,
  text,
  disabled,
}: {
  onPress: () => void;
  text: string;
  disabled?: boolean;
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { opacity: disabled ? 0.5 : 1 }]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'purple',
    borderRadius: 8,
  },
  text: { color: 'white' },
});

export { Button };
