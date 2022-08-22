import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Test from "../pages/test";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/test">
        <Test />
      </Route>
    </Switch>
  );
}

export default Routes;
