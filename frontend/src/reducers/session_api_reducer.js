import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_SIGN_IN
} from "../actions/session_actions";
import { RECEIVE_PAYLOAD } from '../actions/poll_actions';
import { RECEIVE_VOTE } from '../actions/votes_actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };

    case RECEIVE_PAYLOAD:
      if(action.payload.user){
        return {
          ...state,
          isAuthenticated: !!action.payload.user,
          user: action.payload.user
        };
      } else{
        return state;
      }

    case RECEIVE_VOTE:
      return {
        ...state,
        isAuthenticated: !!action.vote.data.user,
        user: action.vote.data.user
      };
    
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isSignedIn: true
      };
    default:
      return state;
  }
}