import React from "react";
import { View } from "react-native";  // 카메라 띄우기 위해 
import {createBottomTabNavigator, TabBarBottom} from "react-navigation";
import HomeRoute from "../routes/HomeRoute"; 

import SearchRoute from "../routes/SearchRoute";
import NotificationsRoute from "../routes/NotificationsRoute";
import ProfileRoute from "../routes/ProfileRoute";
import { Ionicons } from "@expo/vector-icons";


const TabsNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: HomeRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="ios-home"
            size={30}
            color={focused ? "#4dabf7" : "gray"}
          />
        )
      }
    },
    Search: {
      screen: SearchRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="ios-search"
            size={30}
            color={focused ? "#4dabf7" : "gray"}
          />
        )
      }
    },
    AddPhoto: {
      screen: View,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => (
          <Ionicons name={'ios-add-circle-outline'} size={30} color={focused ? "#4dabf7" : "gray"} />
        ),
        tabBarOnPress: () => {
          navigation.navigate("TakePhoto");
        },
      }),
    },
    Notifications: {
      screen: NotificationsRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="ios-heart"
            size={30}
            color={focused ? "#4dabf7" : "gray"}
          />
        )
      }
    },
    Profile: {
      screen: ProfileRoute,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="ios-person"
            size={30}
            color={focused ? "#4dabf7" : "gray"}
          />
        )
      }
    }
  },
  {
    /*
    tabBarComponent 이건 버전이 바뀌면서 아래 3줄로 교체됨
    tabBarOnPress: () => {
      navigation.navigate("TakePhoto");
    },

    tabBarComponent: ({jumpToIndex, ...props, navigation}) => (
      <TabBarBottom
          {...props}
          jumpToIndex={index => {
              if(index === 2){
                  navigation.navigate("TakePhoto")
              } else {
                  jumpToIndex(index)
              }
          }}
      />
    ),
    */
    tabBarPosition: "bottom",
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "#FBFBFB",
        height: 45
      },
      swipeEnabled: true,
      animationEnabled: true
    },
  }
);
export default TabsNavigation;