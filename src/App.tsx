import { FC, JSX } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AppRouter } from "./components/AppRouter";

const App: FC = (): JSX.Element => {
  return (
    <Router>
      <NavBar />
      <AppRouter />
    </Router>
  );
};

export { App };
