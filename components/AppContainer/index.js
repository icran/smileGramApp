import { connect } from "react-redux";
import AppContainer from "./presenter";

const mapStateTopProps = (state, ownProps) => {
    const { user } = state;
    return {
        isLoggedIn: user.isLoggedIn,
        profile: user.profile
    }
}

export default connect(mapStateTopProps)(AppContainer);