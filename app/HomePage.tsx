import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomePage = ({ navigation }: any) => {
  return (
    <LinearGradient colors={['#E0EAFC', '#CFDEF3']} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require('../assets/images/react-native-logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>React Native Eğitimi</Text>
          <Text style={styles.subtitle}>Mobil dünyaya adım at!</Text>
        </View>

        {/* Bilgilendirici metin ve buton */}
        <View style={styles.content}>
          <Text style={styles.infoText}>
            React Native ile hem Android hem de iOS için etkileyici mobil uygulamalar geliştirebilirsin. 
            Şimdi öğrenmeye başla ve projelerini hayata geçir!
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ReactNativeBasics')}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Temelleri Keşfet</Text>
          </TouchableOpacity>
        </View>

        {/* Eğitim Kartları */}
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>🔧 Platform Bağımsız</Text>
            <Text style={styles.cardText}>
              Tek bir kod tabanı ile Android ve iOS uygulamaları geliştirebilirsin.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>⚡ Hızlı Geliştirme</Text>
            <Text style={styles.cardText}>
              Canlı yenileme ve bileşen yapısı ile hızlı prototipleme yapabilirsin.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🎨 Esnek Tasarım</Text>
            <Text style={styles.cardText}>
              CSS benzeri stillerle uygulamanı tamamen kişiselleştirebilirsin.
            </Text>
          </View>
        </View>

        {/* Eğitim Aşamaları */}
        <View style={styles.stepsSection}>
          <Text style={styles.stepsTitle}>🚀 Nasıl Başlanır?</Text>
          <View style={styles.step}>
            <Text style={styles.stepNumber}>1</Text>
            <Text style={styles.stepText}>Kurulumu tamamla ve ortamını hazırla.</Text>
          </View>
          <View style={styles.step}>
            <Text style={styles.stepNumber}>2</Text>
            <Text style={styles.stepText}>Temel bileşenleri ve yapıyı öğren.</Text>
          </View>
          <View style={styles.step}>
            <Text style={styles.stepNumber}>3</Text>
            <Text style={styles.stepText}>Kendi projeni oluşturarak öğrenmeye devam et.</Text>
          </View>
        </View>

        {/* Alıntı bölümü */}
        <View style={styles.quoteSection}>
          <Text style={styles.quoteText}>
            “Kod, hayal gücünün şekil almış halidir.” 🚀
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Daha fazlası için:</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://reactnative.dev')}>
            <Text style={styles.linkText}>reactnative.dev</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    padding: 24,
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 20,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginTop: 6,
  },
  content: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#444',
    lineHeight: 26,
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignSelf: 'center',
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    transform: [{ scale: 1 }],
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 1,
  },
  cardContainer: {
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
  },
  stepsSection: {
    marginTop: 30,
    padding: 16,
    backgroundColor: '#F7F9FC',
    borderRadius: 16,
  },
  stepsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#007AFF',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 28,
    fontWeight: 'bold',
    marginRight: 12,
  },
  stepText: {
    fontSize: 15,
    color: '#555',
  },
  quoteSection: {
    marginTop: 40,
    padding: 20,
    backgroundColor: '#FFF0F5',
    borderRadius: 16,
    alignItems: 'center',
  },
  quoteText: {
    fontStyle: 'italic',
    fontSize: 16,
    color: '#B03060',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
  linkText: {
    fontSize: 16,
    color: '#007AFF',
    marginTop: 8,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});

export default HomePage;
