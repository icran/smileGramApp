// Imports
import { API_URL } from "../../constants";
import { actionCreators as  userActions } from "./user";

// Actions
const SET_FEED = "SET_FEED";
const SET_SEARCH = "SET_SEARCH";

// Action Creators
function setFeed(feed) {
    return {
        type: SET_FEED,
        feed
    };
}

function setSearch(search) {
    return {
        type: SET_SEARCH,
        search
    };
}


// API Actions
function getFeed() {
    return (dispatch, getState) => {
      const { user: { token } } = getState();
      fetch(`${API_URL}/images/`, {
        headers: {
            Authorization: `JWT ${token}`
        }
      })
        .then(response => {
            console.log("photos.js getFeed response : "+ response.status);
            console.log(response);
            
            
          if (response.status === 401) {
            //console.log("photos.js getFeed 401");
            dispatch(userActions.logOut());
          } else {
            //console.log("photos.js getFeed else");
            //console.log(response.json());
            return response.json();
          }
        })
        .then(json => dispatch(setFeed(json)));
    };
  }

  function getSearch() {
    return (dispatch, getState) => {
      const { user: { token } } = getState();
      fetch(`${API_URL}/images/search/`, {
        headers: {
            Authorization: `JWT ${token}`
        }
      })
        .then(response => {
            console.log("photos.js getSearch response");
            console.log(response);
          if (response.status === 401) {
            dispatch(userActions.logOut());
          } else {
            return response.json();
          }
        })
        .then(json => dispatch(setSearch(json)));
    };
  }




// Initial State

const InitialState = {}

// Reducer

function reducer ( state =  InitialState, action) {
    switch ( action.type ) {
        case SET_FEED:
            return applySetFeed(state, action);
        case SET_SEARCH:
            return applySetSearch(state, action);

        default:
            return state;
    }
}

// Reducer Action 

function applySetFeed(state, action){
    const { feed } = action;
    return {
        ...state,
        feed
    };
}

function applySetSearch(state, action){
    const { search } = action;
    return {
        ...state,
        search
    };
}

const actionCreators = {
    getFeed,
    getSearch
};

export { actionCreators };

// Default Reducer Export 

export default reducer;