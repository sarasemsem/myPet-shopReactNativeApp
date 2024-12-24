import { Stack } from "expo-router";
import { useFonts } from "expo-font"; 
import { tokenCache } from '@/cache'
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo';
export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

  if (!publishableKey) {
    throw new Error('Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file')
  }
  useFonts({
    'outfit': require("../assets/fonts/Outfit-Regular.ttf"),
    'outfit-bold': require("../assets/fonts/Outfit-Bold.ttf"),
    'outfit-medium': require("../assets/fonts/Outfit-Medium.ttf"),
  });

  return( 
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
        <ClerkLoaded>
  <Stack>
  <Stack.Screen name="index" options={{ headerShown: false }} />
  <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
  <Stack.Screen 
    name="login/index" 
    options={{ headerShown: false }} />
  </Stack>
  </ClerkLoaded>
  </ClerkProvider>
  );
}
