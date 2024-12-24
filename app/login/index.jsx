import React from 'react';
import { Colors } from './../../constants/Colors';
import { Image, Pressable, Text, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Link } from 'expo-router';
import { useOAuth } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';
export const useWarmUpBrowser = () => {
    React.useEffect(() => {
      // Warm up the android browser to improve UX
      // https://docs.expo.dev/guides/authentication/#improving-user-experience
      void WebBrowser.warmUpAsync()
      return () => {
        void WebBrowser.coolDownAsync()
      }
    }, [])
  }
  
  WebBrowser.maybeCompleteAuthSession()


export default function LoginScreen() {

    useWarmUpBrowser()
    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
            redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),
          })
    
          // If sign in was successful, set the active session
          if (createdSessionId) {
          } else {
            // Use signIn or signUp returned from startOAuthFlow
            // for next steps, such as MFA
          }
        } catch (err) {
          // See https://clerk.com/docs/custom-flows/error-handling
          // for more info on error handling
          console.error(JSON.stringify(err, null, 2))
        }
      }, [])
      
  return (
     <View style={{
        backgroundColor: Colors.WHITE,
        height: "100%",
     }}>
            <Image source={require("../../assets/images/login.png")}
            style={{width: "100%", height: "500"}} />
            <View
            style={{padding: 20, display:'flex', alignItems:'center'}}>
            <Text style={{
                fontFamily : "outfit-bold", 
                fontSize : 30, alignItems:'center'
                }}>Ready to make a new friend?</Text>
                <Text style={{fontFamily : "outfit", 
                    fontSize : 18, textalign:'center',
                    color: Colors.GRAY}}
                >Lets adopte the pet of your dreams and make there life happy again</Text>
            <Pressable  
                    onPress={onPress} 
                    style={{
                    padding: 14, backgroundColor: Colors.PRIMARY,
                     borderRadius: 14, marginTop: 100, width: "100%"}}>
                <Text style={{
                    padding: 14,
                    fontFamily : "outfit-medium", 
                    fontSize : 20, 
                    textAlign:'center',
                    }}>Get Started</Text>
            </Pressable>
            </View>
        </View>
  )
}
