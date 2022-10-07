import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  LogoHoverReducer,
  mobileNavReducer,
  NavHoverReducer,
  ShortNavReducer,
  TransitionRunningReducer,
} from "../reducers/globalState";

const reducer = combineReducers({
  navActive: NavHoverReducer,
  logoHovered: LogoHoverReducer,
  shortNav: ShortNavReducer,
  transition: TransitionRunningReducer,
  mobileNav: mobileNavReducer,
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
