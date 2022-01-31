import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { IAuthState } from '../actions/BasicActions';
import { AuthReducer } from '../reducers/BasicReducer';

// Create an interface for the application state
export interface IAppState {
    auth: IAuthState
}

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
    auth: AuthReducer
});

// Create a configure store function of type `IAppState`
export default function configureStore (): Store<IAppState, any> {
    const store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)));
    return store;
}