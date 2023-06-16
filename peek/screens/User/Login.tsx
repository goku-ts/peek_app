import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { SigninScreenProps } from "../../navigation/Navigator";
import { API } from "../../assets/api_urls";

import {
  FormInput,
  PasswordInput,
} from "../../components/textInputs/TextInputs";

const SignInScreen: React.FC<SigninScreenProps> = ({ navigation, route }) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const [message, setMessage] = useState();

  

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSignIn = (values: typeof initialValues) => {
    // Perform sign-in logic here
    axios
      .post(API.signin, {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        setMessage(response?.data.message);
        if (response?.data?.status === "SUCCESS") {
          navigation.navigate("Notes");
        }
      })
      .catch((e) => console.log(e));
  };

  const [submit, isSubmit] = useState(false);

  return (
    <View style={styles.container}>
      {message && (
        <Text style={[styles.errorText, { fontSize: 12 }]}>{message}</Text>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSignIn}
      >
        {({ handleChange, handleSubmit, handleBlur, values, errors }) => (
          <View style={styles.fieldsandbutton}>
            <FormInput
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              keyboardType="email-address"
              icon={"person-outline"}
            />
            {submit && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <PasswordInput
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              icon={"key-outline"}
            />

            {submit && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <TouchableOpacity
              onPress={() => {
                isSubmit(true);
                handleSubmit();
              }}
              style={styles.button}
            >
              <Text>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.signUpLink}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    alignItems: "center",
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 8,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  passwordContainer: {
    width: 300,
    height: 40,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
    flexDirection: "row",

    alignItems: "center",
  },
  visibilityToggle: {
    marginLeft: 8,
    color: "blue",
  },
  errorText: {
    fontSize: 10,
    color: "red",
    marginBottom: 5,
  },
  signUpLink: {
    marginTop: 16,
    textAlign: "center",
    color: "blue",
    textDecorationLine: "underline",
  },
  button: {
    height: 35,
    width: 80,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  fieldsandbutton: {
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  passwordandtoggle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default SignInScreen;
