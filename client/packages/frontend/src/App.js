import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./Components/Loader";
import "component/dist/main.css";
import "component/src/assets/css/paper-kit.css";
import { routes } from "./Routes/Route";

function App() {
  const routcomponent = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>{routcomponent}</Switch>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
