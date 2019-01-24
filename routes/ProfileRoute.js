import {createStackNavigator, createAppContainer} from "react-navigation";
import ProfileScreen from "../screens/ProfileScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

// 스크린 스택 놓는 순서가 중요하다 
const ProfileRoute = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen
    },
    ...sharedRoutes // 이걸 언팩이라고 하는데 sharedRoutes.js에 sharedRoutes 껄 다 가져오는 것같은
  },
  {
    ...sharedOptions
  }
);

export default ProfileRoute;