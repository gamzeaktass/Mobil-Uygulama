import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const WhatIsRN = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>React Native Nedir?</Text>
      <Text style={styles.paragraph}>
        React Native, Facebook tarafından geliştirilen, mobil uygulamalar oluşturmak için kullanılan açık kaynaklı bir çerçevedir. 
        JavaScript ve React kullanarak hem iOS hem de Android platformları için native mobil uygulamalar geliştirmenizi sağlar.
      </Text>
      <Text style={styles.paragraph}>
        React Native, platformlar arası (cross-platform) geliştirmeye olanak tanır, bu da tek bir kod tabanıyla iki platformda da uygulama yayınlamayı mümkün kılar.
      </Text>
      <Text style={styles.paragraph}>
        React Native, performansı yüksek uygulamalar üretmenize olanak tanır çünkü arayüz bileşenlerini doğrudan native bileşenlerle eşleştirir.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 22,
    color: '#444',
  },
});

export default WhatIsRN;
