// Imports
import { API_URL, FB_APP_ID } from "../../constants";  // 설정 불러오기
import { AsyncStorage } from "react-native";
import { Facebook } from "expo";

// Actions
const LOG_IN = "LOG_IN";    // 토큰 저장
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";
const SET_NOTIFICATIONS = "SET_NOTIFICATIONS";


// Action Creators
function setLogIn(token) {
  return {
    type: LOG_IN,
    token
  };
}


function setUser(user) {
  return {
    type: SET_USER,
    user
  };
}

function logOut() {
  return { type: LOG_OUT };
}


function setNotifications(notifications) {
  return {
    type: SET_NOTIFICATIONS,
    notifications
  };
}

// API Actions
function login(username, password) {
  return dispatch => {
    return fetch(`${API_URL}/rest-auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(json => {
        if ( json.user && json.token ) {
          dispatch(setLogIn(json.token));
          dispatch(setUser(json.user));
          return true;
        }
        else {
          return false;
        }
      });
  };
}

function facebookLogin() {
  return async dispatch => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      FB_APP_ID,
      {
        permissions: ["public_profile", "email"]
      }
    );
    console.log("==========facebookLogin============");
    console.log("==========facebookLogin============type");
    console.log(type)
    console.log("==========facebookLogin============token");
    console.log(token)
    
    if (type === "success") {
      return fetch(`${API_URL}/users/login/facebook/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          access_token: token
        })
      })
     
      .then(response => {
          console.log("success wow response");
          console.log(response);
          //https://63892179.ngrok.io
        });
         /*
        .then(response => response.json())
        .then(json => {
          console.log("success wow");
          console.log("json.user : "+json.user);
          console.log("json.token : "+json.token);
          if (json.user && json.token) {
            dispatch(setLogIn(json.token));
            dispatch(setUser(json.user));
            return true;
          } else {
            return false;
          }
        });
        */
    }
  };
}


function getNotifications() {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    fetch(`${API_URL}/notifications/`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logOut());
        } else {
          return response.json();
        }
      })
      .then(json => dispatch(setNotifications(json)));
  };
}

// 내 플필 저장 해둔다 리덕스에 
function getOwnProfile() {
  return (dispatch, getState) => {
    const { user: { token, profile: { username } } } = getState();
    fetch(`${API_URL}/users/${username}/`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logOut());
        } else {
          return response.json();
        }
      })
      .then(json => dispatch(setUser(json)));
  };
}


// Initial State

const initialState = {
    isLoggedIn: false
  };
  
  // Reducer
  function reducer(state = initialState, action) {
    //applyLogOut(state, action);
    switch (action.type) {
      case LOG_IN:
        return applyLogIn(state, action);
      case LOG_OUT:
        return applyLogOut(state, action); // remove all
      case SET_USER:
        return applySetUser(state, action);
      case SET_NOTIFICATIONS:
        return applySetNotifications(state, action);        
      default:
        return state;
    }
  }
  
  // Reducer Functions
  function applyLogIn(state, action) {
    const { token } = action;
    return {
      ...state,
      isLoggedIn: true,
      token
    }
  }
  function applyLogOut(state, action) {
    AsyncStorage.clear();
    return {
      ...state,
      isLoggedIn: false,
      token: ""
    };
  }
  
  function applySetUser(state, action) {
    const { user } = action;
    return {
      ...state,
      profile: user
    };
  }


  function applySetNotifications(state, action) {
    const { notifications } = action;
    return {
      ...state,
      notifications
    };
  }

  // Exports
const actionCreators = {
  login,
  facebookLogin,
  logOut,
  getNotifications,
  getOwnProfile
};

  export { actionCreators };
  
  // Default Reducer Export
  
  export default reducer;