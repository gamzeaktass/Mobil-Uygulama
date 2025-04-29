import React, { useState, useEffect } from 'react';
import reactNativeLogo from '../assets/images/rn.png';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Animated } from 'react-native';

const ReactNativeBasics = () => {
  const [showComponents, setShowComponents] = useState(false);
  const [showState, setShowState] = useState(false);
  const [showCommonCodes, setShowCommonCodes] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showDatabase, setShowDatabase] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));  // For fade-in animation

  // Fade-in animation
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>React Native Temelleri</Text>
        <Image source={reactNativeLogo} style={styles.logo} />
      </View>

      {/* Intro Text */}
      <Animated.View style={[styles.fadeContainer, { opacity: fadeAnim }]}>
        <Text style={styles.infoText}>
          React Native, mobil uygulama geliştirmek için kullanılan güçlü bir framework'tür.
          JavaScript ve React kullanarak, Android ve iOS gibi platformlar için uygulamalar geliştirebilirsiniz.
        </Text>
      </Animated.View>

      {/* Components */}
      <View style={styles.card}>
        <TouchableOpacity onPress={() => setShowComponents(!showComponents)}>
          <Text style={styles.cardTitle}>📦 Bileşenler (Components)</Text>
        </TouchableOpacity>
        {showComponents && (
          <Text style={styles.cardContent}>
            React Native bileşenleri kullanıcı arayüzlerini oluşturur. Örnekler:
            {'\n\n• '}View: Konteyner görevi görür.
            {'\n• '}Text: Yazı göstermek için kullanılır.
            {'\n• '}Image: Resimleri yükler.
            {'\n• '}Button: Tıklanabilir buton oluşturur.
          </Text>
        )}
      </View>

      {/* State & Props */}
      <View style={styles.card}>
        <TouchableOpacity onPress={() => setShowState(!showState)}>
          <Text style={styles.cardTitle}>⚙️ State & Props</Text>
        </TouchableOpacity>
        {showState && (
          <Text style={styles.cardContent}>
            <Text style={{ fontWeight: 'bold' }}>State:</Text> Bileşenin anlık verilerini tutar.
            {'\n'}Örneğin: bir sayaç uygulamasında sayıyı state içinde tutarız.
            {'\n\n'}
            <Text style={{ fontWeight: 'bold' }}>Props:</Text> Bileşenler arası veri aktarımı sağlar.
            {'\n'}Örneğin: bir butona dışarıdan başlık (`title`) gönderebiliriz.
          </Text>
        )}
      </View>

      {/* Commonly Used Codes */}
      <View style={styles.card}>
        <TouchableOpacity onPress={() => setShowCommonCodes(!showCommonCodes)}>
          <Text style={styles.cardTitle}>🛠️ Sık Kullanılan Kodlar</Text>
        </TouchableOpacity>
        {showCommonCodes && (
          <Text style={styles.cardContent}>
            <Text style={{ fontWeight: 'bold' }}>• useState Kullanımı:</Text>
            {'\n'}const [count, setCount] = useState(0);
            {'\n\n'}
            <Text style={{ fontWeight: 'bold' }}>• useEffect Kullanımı:</Text>
            {'\n'}useEffect(() => &#123; // kodlar &#125;, []); 
            {'\n\n'}
            <Text style={{ fontWeight: 'bold' }}>• Listeleme:</Text>
            {'\n'}{'<FlatList data={veriler} renderItem={({item}) => <Text>{item.name}</Text>} />'}
            {'\n\n'}
            <Text style={{ fontWeight: 'bold' }}>• Buton Kullanımı:</Text>
            {'\n'}{'<Button title="Tıkla" onPress={() => alert("Tıklandı")} />'}
          </Text>
        )}
      </View>

      {/* Project Ideas */}
      <View style={styles.card}>
        <TouchableOpacity onPress={() => setShowProjects(!showProjects)}>
          <Text style={styles.cardTitle}>🚀 Proje Fikirleri</Text>
        </TouchableOpacity>
        {showProjects && (
          <Text style={styles.cardContent}>
            • Günlük Planlayıcı (To-Do List){'\n'}
            • Sağlık Takip Uygulaması (Adım sayar, su içme hatırlatıcı){'\n'}
            • Sosyal Medya Clone (Instagram/Twitter benzeri){'\n'}
            • Haber Okuma Uygulaması (API entegrasyonu){'\n'}
            • Restoran Sipariş Takip Sistemi
          </Text>
        )}
      </View>

      {/* Database Connection */}
      <View style={styles.card}>
        <TouchableOpacity onPress={() => setShowDatabase(!showDatabase)}>
          <Text style={styles.cardTitle}>🗄️ Veri Tabanı Bağlantısı (Code First)</Text>
        </TouchableOpacity>
        {showDatabase && (
          <Text style={styles.cardContent}>
            <Text style={{ fontWeight: 'bold' }}>Adım 1:</Text> Backend (örneğin Node.js + Express + MongoDB) kurulur.{'\n\n'}
            <Text style={{ fontWeight: 'bold' }}>Adım 2:</Text> React Native'de fetch/axios kullanarak istek atılır:{'\n\n'}
            {'fetch("https://your-api.com/data")\n.then(res => res.json())\n.then(data => console.log(data));'}
            {'\n\n'}
            <Text style={{ fontWeight: 'bold' }}>Adım 3:</Text> Code First yaklaşımı ile önce model oluşturulur, sonra database'e yansıtılır.
          </Text>
        )}
      </View>

      {/* Footer Links */}
      <Text style={styles.linkText}>Daha fazla bilgi için:</Text>
      <Text style={styles.link}>🔗 React Native Docs: https://reactnative.dev/docs/getting-started</Text>
      <Text style={styles.link}>🔗 Eğitim Kaynakları: https://www.udemy.com/</Text>
    </ScrollView>
  );
};

export default ReactNativeBasics;

// --- Styles ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8', // daha soft bir arka plan
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A202C',
    textAlign: 'center',
    textShadowColor: '#CBD5E0',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 15,
  },
  logo: {
    width: 200,
    height: 110,
    resizeMode: 'contain',
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#4A90E2',
    padding: 5,
  },
  fadeContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  infoText: {
    fontSize: 17,
    color: '#4A5568',
    lineHeight: 26,
    textAlign: 'justify',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginVertical: 12,
    padding: 18,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2B6CB0',
  },
  cardContent: {
    marginTop: 10,
    fontSize: 16,
    color: '#2D3748',
  },
  image: {
    width: '100%',
    height: 220,
    marginVertical: 20,
    resizeMode: 'contain',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#E2E8F0',
  },
  linkText: {
    fontSize: 18,
    color: '#2B6CB0',
    marginTop: 30,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 16,
    color: '#3182CE',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
