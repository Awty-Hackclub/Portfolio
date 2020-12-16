import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import projectPage from './pages/projectPage'
import reportWebVitals from './reportWebVitals';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>

        <Route exact path="/projects">
          <projectPage />
        </Route>
      </Switch>
    </BrowserRouter>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
