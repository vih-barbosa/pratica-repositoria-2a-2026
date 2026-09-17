import { StyleSheet, View } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button } from 'react-native-css/components';

export default function App() {
  return (
    
    <GluestackUIProvider mode="dark">
      <View style={styles.container}>
<Button>
  <buttonTexty></buttonTexty>
</Button>
    </View>
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
