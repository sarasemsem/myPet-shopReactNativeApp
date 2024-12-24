import { useAuth,useUser } from '@clerk/clerk-expo'
import { Link , Redirect, useRootNavigationState} from "expo-router";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";

export default function Index() {

  const rootNavigationState = useRootNavigationState((state) => state.root);
  useEffect(() => {
    checkNavLoaded();
  },[])
  const checkNavLoaded=()=>{
    if(!rootNavigationState.key)
      return null;
  }
  const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href={'/(tabs)/home'} />}
    else{
    return <Redirect href={'/login'} />}
  return <Stack />
}
