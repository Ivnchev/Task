import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { AuthActionTypes } from "../action-types";

export interface IAuthState {
  auth: any;
}

export interface IAuthAnyAction {
  type: AuthActionTypes.AUTH;
  property: any;
}

export type AuthActions = IAuthAnyAction;

export const AuthAction: ActionCreator<
  ThunkAction<Promise<any>, IAuthState, null, IAuthAnyAction>
> = (data) => {
  return async (dispatch: Dispatch) => {
    try {
      // Your logic here
      dispatch({
        auth: data,
        type: AuthActionTypes.AUTH,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
