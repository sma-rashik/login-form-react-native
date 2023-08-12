import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Form, FormItem } from "react-native-form-component";
import Checkbox from "expo-checkbox";

const Register = ({ navigation }) => {
  const [isSelectedFirst, setIsSelectedFirst] = useState(false);
  const [isSelectedSecond, setIsSelectedSecond] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 5 }}>
          Create your PopX account
        </Text>
      </View>

      <ScrollView style={styles.scrollviewContainer}>
        <Form
          buttonText="Create Account"
          buttonStyle={styles.submitButtonStyle}
          style={styles.form}
          onButtonPress={() => {
            navigation.navigate("Account Settings");
          }}
        >
          <FormItem
            label="Full Name"
            placeholder="Mary Doe"
            style={styles.formItems}
            textInputStyle={{ marginLeft: 20 }}
            labelStyle={{ marginLeft: 30 }}
          />
          <FormItem
            label="Full Name"
            placeholder="Mary Doe"
            style={styles.formItems}
            textInputStyle={{ marginLeft: 20 }}
            labelStyle={{ marginLeft: 30 }}
          />

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
          <FormItem
            label="Company Name"
            placeholder="XYZ pvt ltd."
            style={styles.formItems}
            textInputStyle={{ marginLeft: 20 }}
            labelStyle={{ marginLeft: 30 }}
          />
          <Text style={{ left: 20, fontSize: 16, fontWeight: "700" }}>
            Are you an Agency?
          </Text>

          <View style={{ display: "flex", flexDirection: "row" }}>
            <Checkbox style={{ left: 20, margin: 8 }} value={isSelectedFirst} onValueChange={setIsSelectedFirst} />
            <Text style={{ left: 15, margin: 8 }}>Yes</Text>
            <Checkbox style={{ left: 20, margin: 8 }} value={isSelectedSecond} onValueChange={setIsSelectedSecond} />
            <Text style={{ left: 15, margin: 8 }}>No</Text>
          </View>
        </Form>
      </ScrollView>
    </View>
  );
};

export default Register;

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
