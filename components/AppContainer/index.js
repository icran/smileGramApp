import { connect } from "react-redux";
import AppContainer from "./presenter";
import { actionCreators as photoActions } from "../../redux/modules/photos";
import { actionCreators as userActions } from "../../redux/modules/user";

// 상태 저장 login 여부 상태 저장, 프로필 정보 저장 
const mapStateToProps = (state, ownProps) => {
    const { user } = state;
    return {
        isLoggedIn: user.isLoggedIn,
        profile: user.profile
    }
}

// initApp은 앱 구동 시키면 각각 피드, 검색, 알림, 프로필 정보를 갱신함
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      initApp: () => {
        //  getFeed
        dispatch(photoActions.getFeed());
        //  getSearch
        dispatch(photoActions.getSearch());
        //  getNotifications
        dispatch(userActions.getNotifications());
        //  getProfile
        dispatch(userActions.getOwnProfile());
      }
    };
  };
                         
  export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);