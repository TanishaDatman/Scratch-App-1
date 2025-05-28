import { Button, Input, VStack } from '@/components/ui';
import { router } from 'expo-router';

export default function Birthdate() {
  return (
    <VStack className='p-4' space="md">
      <Input className='placeholder="Birthdate (DD/MM/YYYY)"'  />
      <Button onPress={() => router.push('/password')}>Next</Button>
    </VStack>
  );
}
