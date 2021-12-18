import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { BasicReducer, IBasicState } from '../reducers/BasicReducer';

// Create an interface for the application state
export interface IAppState {
    basicState: IBasicState
}

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
    basicState: BasicReducer
});

// Create a configure store function of type `IAppState`
export default function configureStore (): Store<IAppState, any> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}