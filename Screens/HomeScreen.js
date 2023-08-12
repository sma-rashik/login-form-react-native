import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 5 }}>
          Welcome to PopX
        </Text>
        <Text style={{ color: "grey", fontSize: 15 , fontWeight:'500' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.createButton} onPress={()=>{navigation.navigate('Register')}}>
          <Text style={{ fontSize: 16, fontWeight: "700", color: "white" }}>
            Create Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signButton} onPress={()=>{navigation.navigate('Login')}}>
          <Text style={{ fontSize: 16, fontWeight: "700" }}>
            Already Registered? Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 50,
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  welcomeContainer: {
    width: 225,
    height: 100,
    right: 50,
  },
  createButton: {
    width: 335,
    height: 46,
    backgroundColor: "#6C25FF",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  signButton: {
    width: 335,
    height: 46,
    backgroundColor: "#6C25FF4B",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
