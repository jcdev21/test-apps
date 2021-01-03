import { Switch, Route } from 'react-router-dom';
import UserContextProvider from '../../contexts/UserContext';
import AccountIndex from './Account';
import HomeIndex from './Home';
import UserIndex from './User';

const Private = () => {
    return (
        <Switch>
            <UserContextProvider>
                <Route path="/" component={HomeIndex} exact />
                <Route path="/user/list" component={UserIndex} />
                <Route path="/account" component={AccountIndex} />
            </UserContextProvider>
        </Switch>
    );
}

export default Private;