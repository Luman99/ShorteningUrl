import React from "react";
import ReactDOM from "react-dom";
import { ToastProvider } from 'react-toast-notifications'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";

import { Theme } from './components/util/Theme'
import { HomePage } from "./components/Pages/Home/HomePage";

const rootElement = document.getElementById("root");

const Root = styled.div`
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background: ${props => Theme.bgPrimary};
`;

ReactDOM.render(
  <Router>
    <ToastProvider
      autoDismiss
      autoDismissTimeout={6000}
    >
      <Root>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Root>
    </ToastProvider>
  </Router>,
  rootElement
);
