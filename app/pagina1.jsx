import { StyleSheet, View, Text } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';

import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import { useRouter } from 'expo-router';
export default function pagina1() {
  const router = useRouter()
  return (
    <GluestackUIProvider mode="dark">
      <View style={styles.container}>
        <Text className= 'uppercase font-extrabold'>página um</Text>
        <Divider className="my-3 w-52" />
        <Button className="bg-fuchsia-300" onPress={()=>router.back()}>
          <ButtonText className='font-bold text-white'>Home</ButtonText>
        </Button>
        <Divider className="my-3 w-20" />

         <Button className="bg-indigo-600">
          <ButtonText className='font-bold text-white'>segunda página</ButtonText>
        </Button>
        <Divider className="my-3 w-20"/>

         <Button className="bg-slate-800">
          <ButtonText className='font-bold text-white'>terceira página</ButtonText>
        </Button>
        <Divider className="my-3 w-20" />

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