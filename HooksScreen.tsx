// src/screens/HooksScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HooksScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Hook'ları</Text>
      <Text style={styles.text}>
        React Native, React’in fonksiyonel bileşenlerinde state yönetimi ve yan etkileri yönetmek için bir dizi hook sunar.
      </Text>
      <Text style={styles.text}>
        En yaygın kullanılan hook'lar şunlardır:
      </Text>
      <Text style={styles.subTitle}>1. useState</Text>
      <Text style={styles.text}>
        'useState', bileşenin durumunu (state) yönetmek için kullanılır.
      </Text>
      <Text style={styles.subTitle}>2. useEffect</Text>
      <Text style={styles.text}>
        'useEffect', bileşenin render edilmesinden sonra yan etkileri (side effects) yönetmek için kullanılır.
      </Text>
      <Text style={styles.subTitle}>3. useContext</Text>
      <Text style={styles.text}>
        'useContext', bileşenler arasında veri paylaşımı için kullanılır.
      </Text>
      <Text style={styles.subTitle}>4. useRef</Text>
      <Text style={styles.text}>
        'useRef', bileşenler arasında referanslar (refs) tutmak için kullanılır.
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

export default HooksScreen;
