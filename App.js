import { StyleSheet, View } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
<<<<<<< HEAD
import { Button, buttonText } from "@/components/ui/button"

export default function App() {
  return (
    
    <GluestackUIProvider mode="dark">
      <View style={styles.container}>
<Button className= "bg-fuchsia-500">
  <buttonTexty>primeiro botão </buttonTexty>
</Button>
    </View>
    </GluestackUIProvider>
  
=======
import { Button, ButtonText } from "@/components/ui/button"

export default function App() {
  return (

    <GluestackUIProvider mode="dark">
      <View style={styles.container}>
        <Button className="bg-fuchsia-500">
          <ButtonText>Primeiro Botão</ButtonText>
        </Button>
      </View>
    </GluestackUIProvider>

>>>>>>> 22995bc8a82fed36b351f002badcc81f8db6ae59
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
