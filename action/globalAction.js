import {
  HIDE_SHARE_MODAL,
  HOVER_LOGO,
  HOVER_LOGO_HALT,
  HOVER_NAV,
  HOVER_NAV_HALT,
  LOADING,
  LOADING_HALT,
  MOB_NAV_HIDE,
  MOB_NAV_SHOW,
  SHORT_NAV,
  SHORT_NAV_HALT,
  SHOW_SHARE_MODAL,
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
export const mobileNavOn = () => (dispatch) => {
  dispatch({
    type: MOB_NAV_SHOW,
  });
};
export const mobileNavOff = () => (dispatch) => {
  dispatch({
    type: MOB_NAV_HIDE,
  });
};

export const shareModalOpen = (data) => (dispatch) => {
  dispatch({
    type: SHOW_SHARE_MODAL,
    payload: data,
  });
};
export const shareModalClose = () => (dispatch) => {
  dispatch({
    type: HIDE_SHARE_MODAL,
  });
};
export const loadingStart = () => (dispatch) => {
  dispatch({
    type: LOADING,
  });
};
export const loadingEnd = () => (dispatch) => {
  dispatch({
    type: LOADING_HALT,
  });
};
