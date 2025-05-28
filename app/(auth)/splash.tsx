import { Button, VStack } from '@/components/ui';
import { router } from 'expo-router';

export default function Splash() {
  return (
    <VStack className='flex-1 justify-center items-center' space="lg">
      <Button onPress={() => router.push('/signup')}>Sign Up</Button>
      <Button onPress={() => router.push('/login')}>Login</Button>
    </VStack>
  );
}
