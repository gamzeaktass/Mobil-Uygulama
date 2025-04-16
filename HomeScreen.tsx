import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Button title="React Native Nedir?" onPress={() => navigation.navigate('WhatIsRN')} />
      <Button title="Bileşenler" onPress={() => navigation.navigate('Components')} />
      <Button title="Hook'lar" onPress={() => navigation.navigate('Hooks')} />
      <Button title="Navigasyon" onPress={() => navigation.navigate('Navigation')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
  },
});

export default HomeScreen;
