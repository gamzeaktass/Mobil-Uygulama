import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';


const HomePage = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f5d']} style={styles.header}>
        <Image
          source={require('../assets/images/react-native-logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>React Native Eğitim Uygulamasına Hoşgeldiniz!</Text>
      </LinearGradient>

      <Text style={styles.infoText}>
        React Native, JavaScript kullanarak mobil uygulamalar geliştirmenizi sağlayan bir framework’tür. 
        Tek bir kod tabanı ile hem iOS hem Android uygulamaları geliştirebilirsiniz.
      </Text>

      <View style={styles.moduleBox}>
        <Text style={styles.moduleTitle}> Neden React Native?</Text>
        <Text style={styles.moduleText}>
          ✓ Tek kod tabanı{'\n'}
          ✓ Native performans{'\n'}
          ✓ Hızlı geliştirme döngüsü{'\n'}
          ✓ Büyük topluluk desteği
        </Text>
      </View>

      <View style={styles.motivationBox}>
        <Text style={styles.quote}>
          "Kendi mobil uygulamanı geliştirmek bir hayal değil!"
        </Text>
      </View>

      <TouchableOpacity style={styles.customButton} onPress={() => router.push('/ReactNativeBasics')}>
        <Text style={styles.customButtonText}>📘 React Native Temelleri</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.customButton} onPress={() => router.push('/faq')}>
        <Text style={styles.customButtonText}> ❓Sıkça Sorulan Sorular</Text>
      </TouchableOpacity>


      <View style={styles.moduleBox}>
        <Text style={styles.moduleTitle}> Bu Eğitimde Neler Öğreneceksiniz?</Text>
        <Text style={styles.moduleText}>
          - Bileşen yapısı {'\n'}
          - Stil verme {'\n'}
          - Navigation {'\n'}
          - API bağlantıları {'\n'}
          - Gerçek proje geliştirme!
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Daha fazla bilgi için:</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://reactnative.dev')}>
          <Text style={styles.linkText}>reactnative.dev</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
    borderRadius: 16,
    marginBottom: 30,
  },
  logo: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: '#fff',
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    textAlign: 'justify',
    marginBottom: 20,
  },
  moduleBox: {
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
  moduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3b5998',
    marginBottom: 8,
  },
  moduleText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
  motivationBox: {
    backgroundColor: '#dff9fb',
    padding: 16,
    borderRadius: 12,
    marginBottom: 30,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#130f40',
  },
  customButton: {
    backgroundColor: '#3b5998',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#3b5998',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    elevation: 5,
  },
  customButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 1,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 16,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
  linkText: {
    fontSize: 16,
    color: '#007BFF',
    marginTop: 8,
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
});


export default HomePage;
export const options = {
  title: 'ReNaBil',
};
