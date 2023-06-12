import { useRouter } from "expo-router";
import { Button as ButonPaper } from "react-native-paper";


export default function Button( {route = "/",title, ...props}) {
    const router = useRouter();
    const changePage = () => {
        router.push(route)
    }

  return (
    <ButonPaper mode="contained" {...props} onPress={() => changePage()}>
    {title}
  </ButonPaper>
  
  );
}