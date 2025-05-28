import { Button, Text, VStack } from '@/components/ui';
import { router } from 'expo-router';

export default function Welcome() {
  return (
    <VStack className='flex-1 justify-center items-center' space="lg">
      <Text className='text-3xl'>Welcome!</Text>
      <Button onPress={() => router.replace('/(tabs)')}>Go to Dashboard</Button>
    </VStack>
  );
}
