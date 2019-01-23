import { connect } from "react-redux";
import AppContainer from "./presenter";

const mapStateTopProps = (state, ownProps) => {
    const { user } = state;
    return {
        isLoggedIn : user.isLoggedIn
        //profile : user.profile // 인스타그램 프로필 
    }
}

export default connect(mapStateTopProps)(AppContainer);