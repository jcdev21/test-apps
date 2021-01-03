import { Route, Redirect } from 'react-router-dom';

// Handle Token Expired dengan Interceptions (PR)

const PrivateRoute = ({ component: Component, ...restProps }) => {

    const token = localStorage.getItem('access-token-test-app') || null;

    return (
        <Route
            { ...restProps }

            render={props => {
                return token ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />
            }}
        />
    );
}

export default PrivateRoute;