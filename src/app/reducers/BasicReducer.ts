import { Reducer } from 'redux';
import { BasicActions, BasicActionTypes } from '../actions/BasicActions';

export interface IBasicState {
  property: any;
}

const initialBasicState: IBasicState = {
  property: null
};

export const BasicReducer: Reducer<IBasicState, BasicActions> = (
  state = initialBasicState,
  action
) => {

  switch (action.type) {

    case BasicActionTypes.BASIC: {
      return {
        ...state,
        property: action.property
      };
    }

    default:
      return state;
  }
};