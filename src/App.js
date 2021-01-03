import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from "./auths/PrivateRoute";
import Login from './pages/Login';
import Private from './pages/Private';
import Register from './pages/Register';

const App = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" component={Private} exact />
                <PrivateRoute path="/account" component={Private} exact />
                <PrivateRoute path="/user/list" component={Private} exact />

                <Route path="/login" component={Login} exact />
                <Route path="/register" component={Register} exact />
            </Switch>
        </Router>
    );
}

export default App;
