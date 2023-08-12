import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Form, FormItem } from "react-native-form-component";
import Checkbox from "expo-checkbox";

const Login = ({ navigation }) => {
  const [isSelectedFirst, setIsSelectedFirst] = useState(false);
  const [isSelectedSecond, setIsSelectedSecond] = useState(false);

  const [isButtonHovered, setIsButtonHovered] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 5 }}>
          Signin to your PopX account
        </Text>
        <Text style={{ color: "grey", fontSize: 15 , fontWeight:'500' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </Text>
      </View>

      <ScrollView style={styles.scrollviewContainer}>
        <Form
          buttonText="Login"
          buttonStyle={[
            styles.submitButtonStyle,
            isButtonHovered && styles.submitButtonHoveredStyle,
          ]}
          style={styles.form}
          onButtonPress={() => {
            navigation.navigate("Account Settings");
          }}
        >
          <FormItem
            placeholder="abc@gmail.com"
            label="Email"
            style={styles.formItems}
            textInputStyle={{ marginLeft: 20 }}
            labelStyle={{ marginLeft: 30 }}
          />
          <FormItem
            label="Password"
            placeholder="********"
            style={styles.formItems}
            textInputStyle={{ marginLeft: 20 }}
            labelStyle={{ marginLeft: 30 }}
          />
        </Form>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  form: {
    width: "99%",
  },
  formItems: {
    width: "90%",
    marginLeft: 15,
    borderRadius: 6,
    borderWidth: 1,
    borderBlockColor: "#CBCBCB",
  },

  headingContainer: {
    width: 200,
    marginTop: 100,
    right: 70,
    marginBottom: 20,
  },
  submitButtonStyle: {
    backgroundColor: "#6C25FF",
    width: 335,
    height: 46,
    borderRadius: 10,
    marginLeft: 25,
  },
  scrollviewContainer: {
    paddingTop: 15,
    width: "99%",
    height: 200,
  },
  submitButtonHoveredStyle: {
    backgroundColor: "#8E44AD",
  },
  textInput: {
    color: "black",
    width: 343,
    height: 71,
    borderRadius: 10,
    marginBottom: 16,
    borderColor: "#ECECEC",
    borderWidth: 1,
    padding: 16,
  },
});
