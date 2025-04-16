import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ComponentsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>React Native Bileşenleri</Text>

      <Text style={styles.subTitle}>1. View</Text>
      <Text style={styles.paragraph}>
        Uygulamadaki kutuları ve düzenleri tanımlamak için kullanılır. HTML'deki div gibi düşünülebilir.
      </Text>

      <Text style={styles.subTitle}>2. Text</Text>
      <Text style={styles.paragraph}>
        Metin göstermek için kullanılır. Tüm metin içerikleri bu bileşenle yazılır.
      </Text>

      <Text style={styles.subTitle}>3. Image</Text>
      <Text style={styles.paragraph}>
        Görselleri uygulamaya eklemek için kullanılır. Kaynak olarak yerel veya internet üzerindeki resimler verilebilir.
      </Text>

      <Text style={styles.subTitle}>4. ScrollView</Text>
      <Text style={styles.paragraph}>
        Uzun içerikleri kaydırılabilir hale getirir. Scroll yapma özelliği sağlar.
      </Text>

      <Text style={styles.subTitle}>5. Button</Text>
      <Text style={styles.paragraph}>
        Basılabilir butonlar oluşturmak için kullanılır. Kullanıcıdan etkileşim almak için idealdir.
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
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    color: '#222',
  },
  paragraph: {
    fontSize: 15,
    marginBottom: 10,
    color: '#444',
    lineHeight: 22,
  },
});

export default ComponentsScreen;
