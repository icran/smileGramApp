import React from "react";
import { View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const LogInScreen = props => (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logo-white.png")}
          resizeMode="stretch"
          style={styles.logo}
        />
      </View>
      <View style={styles.content}>
        <TextInput placeholder="Username" />
        <TextInput placeholder="Password" />
        <TouchableOpacity>
          <View>
            <Text>Log In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fbContainer}>
          <View style={styles.fbView}>
            <Ionicons name="logo-facebook" size={22} color="#3E99EE" />
            <Text style={styles.fbText}>Log in with Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );



const styles = StyleSheet.create({
    container: {},
    header: {},
    logo: {},
    content: {}
});
export default LogInScreen;