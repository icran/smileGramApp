import React from "react";
import {createStackNavigator, createAppContainer} from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";
import { Image } from "react-native";
import NavButton from "../components/NavButton";

// 스크린 스택 놓는 순서가 중요하다 
const HomeRoute = createStackNavigator(
  {
    Home: {
      screen: FeedScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: (
          <Image
            source={require("../assets/images/logo.png")}
            style={{ height: 35 }}
            resizeMode={"contain"}
          />
        ),
        headerLeft: (
          <NavButton
            iconName={"ios-camera"}
            onPress={() => navigation.navigate("TakePhoto")}
          />
        )
      }),
    },
    ...sharedRoutes // 이걸 언팩이라고 하는데 sharedRoutes.js에 sharedRoutes 껄 다 가져오는 것같은
  },
  {
    ...sharedOptions
  }
);

export default HomeRoute;