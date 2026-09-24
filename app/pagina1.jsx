import { Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function pagina1() {
  const router = useRouter()
  return (
      <Box ClassName='flex-1' justifyContent='center' alignItems='center'>
        <Text className= 'uppercase font-extrabold'>página um</Text>
      </Box>
  );
}

