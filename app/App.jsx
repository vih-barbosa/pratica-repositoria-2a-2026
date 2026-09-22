import { StyleSheet, View, Text } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';

import { Link } from 'expo-router';
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';

export default function App() {
  return (
    <GluestackUIProvider mode="dark">
      <View style={styles.container}>

        <Text className="uppercase font-extrabold">
          Página Home
        </Text>

        <Divider className="my-3 w-52" />

        <Link href="/pagina1" asChild>
          <Button className="bg-fuchsia-300">
            <ButtonText className="font-bold text-white">
              Primeira página
            </ButtonText>
          </Button>
        </Link>

        <Divider className="my-3 w-20" />

        <Link href="/pagina2" asChild>
          <Button className="bg-indigo-600">
            <ButtonText className="font-bold text-white">
              Segunda página
            </ButtonText>
          </Button>
        </Link>

        <Divider className="my-3 w-20" />

        <Link href="/pagina3" asChild>
          <Button className="bg-slate-800">
            <ButtonText className="font-bold text-white">
              Terceira página
            </ButtonText>
          </Button>
        </Link>

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
