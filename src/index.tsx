
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import configureStore from './app/store/Store';
import { AuthProvider } from './provider/AuthProvider';
import theme from './styles/theme';
import './styles/index.css'
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StrictMode >
        <AuthProvider>
          <App />
        </AuthProvider>
      </StrictMode>
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root'),
);