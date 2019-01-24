import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import LogInScreen from "./presenter";


class Container extends Component {
  
  state = {
    username: "",
    password: "",
    isSubmitting: false
  };
  
  static propTypes = {
    login : PropTypes.func.isRequired,
    fbLogin: PropTypes.func.isRequired
  };
  render() {
    return <LogInScreen {...this.state} 
    changeUsername={this._changeUsername} 
    changePassword={this._changePassword} 
    submit={this._submit} 
    fbLogin={this._handleFBLogin}
    />;
  }
  _changeUsername = text => {
    this.setState({ username : text });
  };
  _changePassword = text => {
    this.setState({ password : text });
  };
  _submit = async () => { // async 로그인 액션을 기다림. 
    const { username, password, isSubmitting } = this.state;
    const { login } = this.props;
    // 로그인을 누르면 체크함
    if (!isSubmitting) {
      if (username && password) {
        this.setState({
          isSubmitting: true
        });
        // user.js에서 login 하면 dispatch function login 
        //login(username, password);
        const loginResult = await login(username, password); // await를 앞에 붙이면 대기함 리턴값 올때까지
        if (!loginResult) {
          Alert.alert("Something went wrong, try again");
          this.setState({ isSubmitting: false });
        }

        // redux action
      } else {
        Alert.alert("All fields are required");
      }
    }
  };
  _handleFBLogin = async () => {
    const { fbLogin } = this.props;
    this.setState({isSubmitting:true});
    const facebookResult = await fbLogin();
    if (!facebookResult) {
      this.setState({isSubmitting:false});
    }
  }
}

export default Container;