import { applyMiddleware, createStore } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import user from "./modules/user";
import photos from "./modules/user";

const middlewares = [thunk];

//blacklist를 설정해서 저장안하고 싶은 모듈도 설정할 수 있음. #4-2 Persisting the Redux Store part One
const persistConfig = { 
  key: "root",
  storage
};


const reducer = persistCombineReducers(persistConfig, {
  user,
  photos
});

const configureStore = () => {
  let store = createStore(reducer, applyMiddleware(...middlewares));
  let persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;