import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto.otf'),
  });

}