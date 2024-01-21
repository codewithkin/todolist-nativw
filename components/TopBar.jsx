import { Text, View, Image, StyleSheet } from "react-native";

export default function TopBar () {
  return (
    <View style={styles.container}>
      <Image source="./assets/user.jpg" style={styles.userImage} />
      <Text style={styles.heading}>To do list</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  heading: {
    fontSize: 20
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  }
});
