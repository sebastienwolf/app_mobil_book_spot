import { StyleSheet, Button as ButtonNative } from "react-native";
import { useRouter } from "expo-router";

export default function Button( {route = "/", ...props}) {
    const router = useRouter();
    const onPress = () => {
      console.log(route)
        router.push(route)
    }

  return (
    <ButtonNative
    onPress={onPress}
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
    {...props}
  />
  );
}



const styles = StyleSheet.create({
 
});