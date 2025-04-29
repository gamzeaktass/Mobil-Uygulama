import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const FaqPage = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>React Native Sıkça Sorulan Sorular</Text>

      <View style={styles.faqBox}>
        <Text style={styles.faqQuestion}>1. React Native nedir?</Text>
        <Text style={styles.faqAnswer}>
          React Native, JavaScript ile mobil uygulama geliştirmenizi sağlayan bir framework'tür.
          Tek bir kod tabanı ile iOS ve Android uygulamaları geliştirebilirsiniz.
        </Text>
      </View>

      <View style={styles.faqBox}>
        <Text style={styles.faqQuestion}>2. React Native ile Android ve iOS uygulamaları geliştirebilir miyim?</Text>
        <Text style={styles.faqAnswer}>
          Evet, React Native ile aynı kod tabanını kullanarak hem Android hem de iOS platformları için uygulamalar geliştirebilirsiniz.
        </Text>
      </View>

      <View style={styles.faqBox}>
        <Text style={styles.faqQuestion}>3. React Native kullanmak için ne gibi araçlara ihtiyacım var?</Text>
        <Text style={styles.faqAnswer}>
          React Native kullanmaya başlamak için Node.js, npm/yarn, Android Studio ve Xcode gibi araçlara ihtiyacınız vardır.
        </Text>
      </View>

      <View style={styles.faqBox}>
        <Text style={styles.faqQuestion}>4. React Native'de fonksiyonel bileşenler nasıl yazılır?</Text>
        <Text style={styles.faqAnswer}>
          React Native'de fonksiyonel bileşenler, `const` veya `function` anahtar kelimeleri ile tanımlanır ve JSX döndürür.
          Örnek:
          <Text style={styles.exampleCode}>
            {`\nconst MyComponent = () => { return <Text>Hello World!</Text>; };`}
          </Text>
        </Text>
      </View>

      <View style={styles.faqBox}>
        <Text style={styles.faqQuestion}>5. React Native projesinde nasıl yeni bir sayfa oluştururum?</Text>
        <Text style={styles.faqAnswer}>
          React Navigation kullanarak yeni bir sayfa (ekran) oluşturabilirsiniz. Yeni bir ekran eklemek için aşağıdaki gibi bir kod yapısı kullanabilirsiniz:
          <Text style={styles.exampleCode}>
            {`\nimport { createStackNavigator } from '@react-navigation/stack';`}
            {"\nconst Stack = createStackNavigator();"}
            {"\n<Stack.Screen name='Home' component={HomeScreen} />"}
          </Text>
        </Text>
      </View>

      <Text style={styles.footer}>Daha fazla bilgi için: </Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://reactnative.dev')}>
        <Text style={styles.linkText}>reactnative.dev</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  faqBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
  },
  faqQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3b5998',
  },
  faqAnswer: {
    fontSize: 15,
    color: '#444',
    marginTop: 8,
    lineHeight: 22,
  },
  exampleCode: {
    fontSize: 14,
    backgroundColor: '#f4f4f4',
    padding: 8,
    borderRadius: 4,
    marginTop: 10,
    color: '#333',
  },
  footer: {
    marginTop: 30,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#999',
  },
  linkText: {
    fontSize: 16,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default FaqPage;
