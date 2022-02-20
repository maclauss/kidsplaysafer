import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Bangers from "./fonts/Bangers-Regular.ttf";

import ROUTE_NAMES from "./constants/routeNames";

import Home from "./views/pages/Home";
import Start from "./views/pages/Start";
import About from "./views/pages/About";
import Contact from "./views/pages/Contact";
import AvatarSelection from "./views/pages/AvatarSelection";
import Introduction from "./views/pages/Introduction";
import Questions from "./views/pages/Questions";
import PlayAgain from "./views/pages/PlayAgain";
import MailerForm from "./views/pages/MailerForm";
import Resources from "./views/pages/Resources";

const {
  HOME,
  START,
  ABOUT,
  CONTACT,
  AVATAR_SELECTION,
  INTRODUCTION,
  QUESTIONS,
  PLAY_AGAIN,
  MAILER_FORM,
  RESOURCES,
} = ROUTE_NAMES;

const ROUTES = [
  { path: HOME, element: <Home />, exact: true },
  { path: START, element: <Start />, exact: true },
  { path: ABOUT, element: <About />, exact: true },
  { path: CONTACT, element: <Contact />, exact: true },
  { path: AVATAR_SELECTION, element: <AvatarSelection />, exact: true },
  { path: INTRODUCTION, element: <Introduction />, exact: true },
  { path: QUESTIONS, element: <Questions />, exact: true },
  { path: PLAY_AGAIN, element: <PlayAgain />, exact: true },
  { path: MAILER_FORM, element: <MailerForm />, exact: true },
  { path: RESOURCES, element: <Resources />, exact: true },
];

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
    font-size: 16px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
  }
  *, *:before, *:after {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    box-sizing: inherit;
  }
`;
