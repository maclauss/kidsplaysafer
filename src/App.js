import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Bangers from "./fonts/Bangers-Regular.ttf";

import ROUTE_NAMES from "./constants/routeNames";

import Home from "./views/pages/Home";

const { HOME } = ROUTE_NAMES;

const ROUTES = [{ path: HOME, element: <Home />, exact: true }];

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        {ROUTES.map((route) => {
          const key = route.path === "" ? "/home" : route.path;
          return <Route {...route} key={key} />;
        })}
      </Routes>
    </Router>
  );
};

export default App;

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Bangers';
    src: url(${Bangers});
  }

  html, body {
    font-family: 'Bangers', 'Open Sans', sans-serif;
    font-size: 16px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
