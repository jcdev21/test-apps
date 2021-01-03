import { Switch, Route, Redirect } from 'react-router-dom';
import User from './User';

const UserIndex = () => {
    return (
        <Switch>
            <Route path="/user/list" component={User} />
            {/* Route lainnya di folder User */}
            <Redirect to="/user/list" />
        </Switch>
    );
}

export default UserIndex;