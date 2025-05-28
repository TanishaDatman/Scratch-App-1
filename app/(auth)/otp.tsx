import { Button, Input, Text, VStack } from '@/components/ui';
import { router } from 'expo-router';

export default function Otp() {
  return (
    <VStack className='p-4' space="md">
      <Text>Enter OTP sent to your email</Text>
      <Input className='placeholder="OTP"' />
      <Button onPress={() => router.push('/birthdate')}>Verify</Button>
    </VStack>
  );
}
