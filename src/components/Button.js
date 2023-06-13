import { useRouter } from "expo-router";
import { Button as ButonPaper } from "react-native-paper";


export default function Button({ route = "/", title, style, ...props }) {
  const router = useRouter();
  const changePage = () => {
    router.push(route)
  }

  return (
    <ButonPaper mode="contained"
      onPress={() => changePage()}
      style={{...style}}
      {...props}
    >
      {title}
    </ButonPaper>

  );
}