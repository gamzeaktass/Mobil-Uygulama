// src/screens/NavigationScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NavigationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Navigasyonu</Text>
      <Text style={styles.text}>
        React Native, ekranlar arasında geçiş yapabilmek için navigasyon sağlar.
      </Text>
      <Text style={styles.text}>
        React Navigation, bu amaçla kullanılan popüler bir kütüphanedir. React Navigation ile iki tür navigasyon türü vardır:
      </Text>
      <Text style={styles.subTitle}>1. Stack Navigator</Text>
      <Text style={styles.text}>
        Stack Navigator, ekranlar arasında yığın (stack) yapısı kullanarak geçiş yapmanızı sağlar.
      </Text>
      <Text style={styles.subTitle}>2. Tab Navigator</Text>
      <Text style={styles.text}>
        Tab Navigator, alt sekmeler aracılığıyla ekranlar arasında geçiş yapmanızı sağlar.
      </Text>
      <Text style={styles.subTitle}>3. Drawer Navigator</Text>
      <Text style={styles.text}>
        Drawer Navigator, ekranlar arasında geçiş yapmak için bir kenar çekmecesi kullanır.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
  },
});

export default NavigationScreen;
