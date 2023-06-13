import { Stack } from "expo-router";
import { PaperProvider } from 'react-native-paper';
import { Provider } from "../context/auth";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "index",
};

export default function Layout() {
  return (<Provider><PaperProvider><Stack /></PaperProvider></Provider>);
}