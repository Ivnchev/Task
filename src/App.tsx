import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navigation } from './app/components/Navigation';
import { About } from './app/containers/About';
import { Contacts } from './app/containers/Contacts';
import Login from './app/containers/Login';
import { NotFound } from './app/containers/NotFound';
import { ResetPassword } from './app/containers/ResetPassword';
import { StartPage } from './app/containers/StartPage';
import { Tickets } from './app/containers/Tickets';
import IsAuth from './hoc/isAuth';
import './styles/App.css';

export const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" render={() => (<StartPage />)} />
          <Route exact path="/about" render={() => (<About />)} />
          <Route exact path="/contactsUs" render={() => (<Contacts />)} />
          <Route exact path="/login" render={() => (<Login />)} />
          <Route exact path="/reset-password" render={() => (<ResetPassword />)} />
          <Route exact path="/tickets" component={IsAuth(Tickets)} />
          <Route exact path="/ticket/:id/edit" component={Contacts} />
          <Route render={() => (<NotFound />)} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}