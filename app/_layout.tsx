import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'ReNaBil', // ← Ekran başlığını burada değiştiriyoruz
        }}
      />
      <Stack.Screen name="faq" options={{ title: 'Sıkça Sorulan Sorular' }} />
      <Stack.Screen name="ReactNativeBasics" options={{ title: 'React Native Temelleri' }} />
    </Stack>
  );
}
