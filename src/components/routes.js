import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../pages/home";

const Routes = () => {
    return (
        <>
        <Switch>
            <Route path="/" component={Home} />
            <Route path="*">
                <Redirect to="/"/>
            </Route>
        </Switch>
        </>
    )
}

export default Routes;