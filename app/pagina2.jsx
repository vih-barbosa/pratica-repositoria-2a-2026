import { Text } from 'react-native';
import { Box } from '@/components/ui/box';
import { useRouter } from 'expo-router';

export default function pagina2() {
  const router = useRouter()
  return (
    <Box ClassName='flex-1' justifyContent='center' alignItems='center'>
        <Text className= 'uppercase font-extrabold'>iteins que eu gostei</Text>
      </Box>
  );
}
