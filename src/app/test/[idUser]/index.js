import { View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { useLocalSearchParams } from "expo-router";

export default function Page() {
  const { idUser } = useLocalSearchParams();
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl("/scan/" + idUser);
    console.log(url);
  }, [idUser]);

  return (
    <ScrollView>
      <View>
        <Button route={url} title="Scanner le livre" />
      </View>
    </ScrollView>
  );
}
