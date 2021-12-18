
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IBasicState } from '../reducers/BasicReducer';

export enum BasicActionTypes {
    BASIC = 'BASIC',
}

export interface IBasicAnyAction {
    type: BasicActionTypes.BASIC;
    property: any;
}

export type BasicActions = IBasicAnyAction;

export const BasicAction: ActionCreator<ThunkAction<Promise<any>, IBasicState, null, IBasicAnyAction>> = () => {
    return async (dispatch: Dispatch) => {
        try {
            // Your logic here
            dispatch({
                property: null,
                type: BasicActionTypes.BASIC
            })
        } catch (err) {
            console.error(err);
        }
    };
};