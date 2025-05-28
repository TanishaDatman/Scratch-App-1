import { Button, Input, VStack } from '@/components/ui';
import { router } from 'expo-router';

export default function Password() {
  return (
    <VStack className='p-4' space="md">
      <Input className='placeholder="Create Password"'   />
      <Input className='placeholder="Confirm Password"'  />
      <Button onPress={() => router.push('/welcome')}>Create Account</Button>
    </VStack>
  );
}
