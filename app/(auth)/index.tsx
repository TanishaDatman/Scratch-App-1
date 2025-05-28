import { Button, Pressable, Text, VStack } from '@/components/ui';
import { Image, View } from 'react-native';
import { router } from 'expo-router';

export default function Home() {
  return (
    <VStack className="flex-1 justify-between items-center px-6 py-10 bg-white sm:px-8 md:px-12 lg:px-20 xl:px-32">
      {/* Logo Section */}
      <View className="flex-1 items-center justify-center px-6 sm:px-8 md:px-12 max-w-screen-md w-full">
        <Image
          source={require('../../assets/images/logo.png')}
          className="w-40 h-40 mb-10 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-96 lg:h-96"
        />

        {/* Text Section */}
        <Text className="text-2xl font-bold text-center sm:text-3xl md:text-4xl lg:text-5xl">
          <Text className="text-black text-2xl md:text-3xl">Datman,</Text>
          <Text className="text-black text-2xl font-normal md:text-3xl "> Tailored for your </Text>
          <Text className="text-black text-2xl font-normal md:text-3xl ">transactions</Text>
        </Text>

        <Text className="text-center text-gray-500 mt-4 text-sm leading-5 sm:text-base sm:leading-6 md:text-lg md:leading-7 lg:text-xl lg:leading-8">
          Here at Datman, we have a wealth of experience in providing both traditional and modern
          payments solutions. Unlike many other payment providers, we put you, our customer first!
        </Text>
      </View>

      {/* Button Section */}
      <View className="flex-row w-full px-6 space-x-4 mb-12 sm:px-8 md:px-12 max-w-screen-md">
      <Pressable
          onPress={() => router.push('/signup')}
          className="flex-1 border border-black bg-white mr-3 rounded-full h-12 items-center justify-center active:opacity-75 active:scale-95 transition"
        >
          <Text className="text-black text-base font-medium sm:text-md">Sign up</Text>
        </Pressable>

<Pressable
          onPress={() => router.push('/login')}
          className="flex-1 bg-black rounded-full h-12 items-center justify-center active:opacity-80 active:scale-95 transition"
        >
          <Text className="text-white text-base font-medium sm:text-md">Login</Text>
        </Pressable>
      </View>
    </VStack>

  );
}
