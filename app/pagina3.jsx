import {Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';

export default function pagina3() {
  const router = useRouter()
  return (
      <Box ClassName='flex-1' justifyContent='center' alignItems='center'>
        <Text className= 'uppercase font-extrabold'>página três</Text>
      </Box>
  );
}
