import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";

// 피드는 map state to props 에서 오고, 이건 리듀서에서 오고, 이건 getFeed() 에서 온다.
const mapStateToProps = (state, ownProps) => {
  const { photos: { feed } } = state
  return {
    feed
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFeed: () => {
      dispatch(photoActions.getFeed());
    }
  };
};

export default connect( mapStateToProps, mapDispatchToProps )(Container);
