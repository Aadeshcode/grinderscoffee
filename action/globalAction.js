import {
  HOVER_LOGO,
  HOVER_LOGO_HALT,
  HOVER_NAV,
  HOVER_NAV_HALT,
  SHORT_NAV,
  SHORT_NAV_HALT,
  TRANSITION,
  TRANSITION_HALT,
} from "../constants/globalConstants";

export const hoverNav = (data) => (dispatch) => {
  dispatch({
    type: HOVER_NAV,
    payload: data,
  });
};
export const hoverNavHalt = () => (dispatch) => {
  dispatch({
    type: HOVER_NAV_HALT,
  });
};
export const hoverLogo = () => (dispatch) => {
  dispatch({
    type: HOVER_LOGO,
  });
};
export const hoverLogoHalt = () => (dispatch) => {
  dispatch({
    type: HOVER_LOGO_HALT,
  });
};
export const shortNav = () => (dispatch) => {
  dispatch({
    type: SHORT_NAV,
  });
};
export const shortNavHalt = () => (dispatch) => {
  dispatch({
    type: SHORT_NAV_HALT,
  });
};
export const runTransition = () => (dispatch) => {
  dispatch({
    type: TRANSITION,
  });
};
export const transitionHalt = () => (dispatch) => {
  dispatch({
    type: TRANSITION_HALT,
  });
};
