import {createStackNavigator, createAppContainer} from "react-navigation";
import TakePhotoScreen from "../screens/TakePhotoScreen";
import TabsNavigation from "./TabsNavigation";


const RootNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabsNavigation,
      navigationOptions: {
        header: null  // createStackNavigator 스택네비게이터는 디폴트로 모든 스크린에 헤더를 준다.
      }
    },
    TakePhoto: {
      screen: TakePhotoScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
      mode: "modal",
      defaultNavigationOptions: {
          gesturesEnabled: true
      },
    
  },

);

export default createAppContainer(RootNavigation);