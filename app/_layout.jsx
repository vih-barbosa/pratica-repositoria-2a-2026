import { StyleSheet, View, Text } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Link, Stack} from "expo-router"
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';

export default function App() {
  return (
    <GluestackUIProvider mode="dark">
      <Stack />
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});