import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import  theme  from './components/UI/Theme';
import { Provider as ReactProvider } from 'react-redux';
import { configStore } from './redux/store/store';
import { history } from './History';
const store = configStore();

ReactDOM.render(
  <ReactProvider store = {store}>
    <React.StrictMode history = {history}>
      <BrowserRouter>
      <ThemeProvider theme = {theme}>
        <App />
      </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  </ReactProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
