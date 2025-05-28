import { Button, Input, VStack } from '@/components/ui';
import { router } from 'expo-router';

export default function Signup() {
  return (
    <VStack className='p-4' space="md">
      <Input className='placeholder="Full Name"'  />
      <Input className='placeholder="Email"' />
      <Button onPress={() => router.push('/otp')}>Continue</Button>
    </VStack>
  );
}
