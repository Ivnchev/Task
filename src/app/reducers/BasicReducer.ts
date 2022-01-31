import { Reducer } from 'redux';
import { AuthActionTypes } from '../action-types';
import { AuthActions, IAuthState } from '../actions/BasicActions';

const initialAuthState: IAuthState = {
  auth: null
};

export const AuthReducer: Reducer<IAuthState, AuthActions> = (state = initialAuthState,action) => {

  switch (action.type) {

    case AuthActionTypes.AUTH: {
      return {
        ...state,
        auth: action.property
      };
    }

    default:
      return state;
  }
};