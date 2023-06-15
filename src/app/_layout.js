import { Stack } from "expo-router";
import { PaperProvider } from 'react-native-paper';
import { Provider } from "../context/auth";


export const unstable_settings = {
  // Assurez-vous que n'importe quelle route puisse revenir à `/`
  initialRouteName: "index",
};

export default function Layout() {

  return (
    <Provider>
      <PaperProvider>
        <Stack>
        </Stack>
      </PaperProvider>
    </Provider>
  );
}
