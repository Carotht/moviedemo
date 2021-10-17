import "./assets/css/index.css";
import { useEffect, Suspense, lazy } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { RoutesHome, RoutesAdmin } from "./routes";
import { actTryLogin } from "./containers/AdminTemplate/Auth/modules/actions";
import { useDispatch } from "react-redux";
import { actTrySignIn } from "containers/HomeTemplate/RegisterPage/Signin/modules/actions";
import Loader from "./components/Loader/index";

const AuthComponent = lazy(() => import("containers/AdminTemplate/Auth"));
const RegisterComponent = lazy(() =>
  import("containers/HomeTemplate/RegisterPage")
);
const PageNotFound = lazy(() => import("containers/PageNotFound"));

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actTryLogin(props.history));
    dispatch(actTrySignIn(props.history));
  }, []);

  return (
    <Suspense fallback={<Loader/>}>
      <Switch>
        {RoutesHome()}
        {RoutesAdmin()}
        {/* Login and logout */}
        <Route path="/register" component={RegisterComponent} />
        {/* Auth */}
        <Route path="/auth" component={AuthComponent} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </Suspense>
  );
}

export default withRouter(App);
