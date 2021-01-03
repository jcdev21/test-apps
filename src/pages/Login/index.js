import { useState } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';

// Components
import Wrapper from "../../components/Wrapper";
import Toast from "../../components/Toast";

// Image and Icon
import Logo from '../../assets/Icons/Logo_Apps.png';
import VisibilityIcon from '../../assets/Icons/visibility_24px.svg';

// Services
import { login } from '../../services/AuthService';


const Main = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    form {
        width: 100%;
        margin-top: 17px;
    }
`;

const FlexFooter = styled.div`
    display: flex;
    align-items: center;
`;

const ToRegister = styled.div`
    margin-top: 50px;
    text-align: center;
    font-size: 12px;
    color: #626060;
`;

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [typePassword, setTypePassword] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState([]);
    const [statusLogin, setStatusLogin] = useState(true);
    const history = useHistory();

    const showPassword = (e) => {
        e.preventDefault();
        setTypePassword(c => !c);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = await login(email, password);
        setLoading(false);
        setStatusLogin(false);

        if (!data.status) {
            setError(true);
            (data.message) ? setErrorText([{msg: data.message}]) : setErrorText(data.errors);
            return;
        }

        localStorage.setItem('access-token-test-app', data.token);
        history.push('/');
        return;
    }

    if (localStorage.getItem('access-token-test-app')) {
        return ( <Redirect to="/" /> );
    }

    return (
        <Wrapper>
            { (error) ? <Toast status={statusLogin} texts={errorText} click={() => {
                setError(false);
                setEmail('');
                setPassword('');
                setTypePassword(true);
            }} /> : '' }
            <Main>
                <div>
                    <img id="logo" src={Logo} alt="Logo" />
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label className="my-label">Email</Form.Label>
                        <Form.Control
                            type="email"
                            className="my-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group style={{ position: 'relative' }}>
                        <Form.Label className="my-label">Password</Form.Label>
                        <Form.Control
                            type={(typePassword) ? 'password' : 'text'}
                            className="my-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button className="btn-eye-password" type="button" onClick={showPassword}>
                            <img src={VisibilityIcon} alt="Show Password" />
                        </button>
                    </Form.Group>
                    <Form.Group>
                        <FlexFooter>
                            <NavLink to="#" style={{ fontSize: '14px', fontWeight: '500', letterSpacing: '0.5px' }} >Forgot Password</NavLink>
                            <Button className="ml-auto" type="submit" >{(loading ? '... Log In' : 'Log In')}</Button>
                        </FlexFooter>
                        <ToRegister>
                            <p>Don't have an account? <br /> <NavLink to="/register">Register</NavLink></p>
                        </ToRegister>
                    </Form.Group>
                </Form>
            </Main>
        </Wrapper>
    );
}

export default Login;