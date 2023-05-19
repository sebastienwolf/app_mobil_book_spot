import { StyleSheet, Text, View } from "react-native";


export default function Page() {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>carte des test</Text>
            </View>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:"100%",
      alignItems: "center",
      padding:20
      
    }
  
  });