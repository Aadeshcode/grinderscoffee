import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  loadingReducer,
  LogoHoverReducer,
  mobileNavReducer,
  NavHoverReducer,
  resetEditorReducer,
  shareModalReducer,
  ShortNavReducer,
  TransitionRunningReducer,
  updateEditorReducer,
} from "../reducers/globalState";

const reducer = combineReducers({
  navActive: NavHoverReducer,
  logoHovered: LogoHoverReducer,
  shortNav: ShortNavReducer,
  transition: TransitionRunningReducer,
  mobileNav: mobileNavReducer,
  resetEditor: resetEditorReducer,
  updateEditor: updateEditorReducer,
  shareModal: shareModalReducer,
  loading: loadingReducer,
});
function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(reducer, preloadedState, composedEnhancers);

  return store;
}

export const store = configureStore();

export default store;
