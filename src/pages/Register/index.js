import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

// Components
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import Toast from "../../components/Toast";

// Image and Icon
import BackIcon from '../../assets/Icons/arrow_back_ios_24px.svg';
import VisibilityIcon from '../../assets/Icons/visibility_24px.svg';

// Services
import { register } from '../../services/AuthService';

const Register = ({ history }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [typePassword, setTypePassword] = useState(true);
    const [typeConfirmPassword, setTypeConfirmPassword] = useState(true);
    const [loading, setLoading] = useState(false);
    const [notice, setNotice] = useState(false);
    const [noticeText, setNoticeText] = useState([]);
    const [statusRegister, setStatusRegister] = useState(true);

    const goBack = () => history.goBack();
    const toLogin = () => {
        if (history.location.state && history.location.state.prevPath && history.location.state.prevPath === '/user/list') {
            return history.push(history.location.state.prevPath);
        }

        return history.push('/login');
    }

    const showPassword = (e) => {
        e.preventDefault();
        setTypePassword(c => !c);
    }

    const showConfirmPassword = (e) => {
        e.preventDefault();
        setTypeConfirmPassword(c => !c);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const datas = {
            firstName, lastName, email, password, confirmPassword
        }

        setLoading(true);
        const result = await register(datas);
        setLoading(false);
        setStatusRegister(result.status);

        if (!result.status) {
            setNotice(true);
            (result.message) ? setNoticeText([{msg: result.message}]) : setNoticeText(result.errors);
            return;
        }

        setNotice(true);
        setNoticeText(result);
    }

    return (
        <Wrapper>
            { (notice) ?
                <Toast status={statusRegister} texts={noticeText} click={
                    (statusRegister) ?
                    () => toLogin()
                    :
                    () => {
                        setNotice(false);
                        setStatusRegister(true);
                        setTypePassword(true);
                        setTypeConfirmPassword(true);
                    }
                } />
                : ''
            }
            <Header
                type=''
                title='Form Register'
                imgNavMenu={BackIcon}
                imgLogo=''
                widthNavMenu='11.67'
                click={() => goBack()}
            />
            <main>
                <Form onSubmit={handleSubmit} style={{ marginTop: '42px' }}>
                    <Form.Group>
                        <Form.Label className="my-label">First Name</Form.Label>
                        <Form.Control
                            type="text"
                            className="my-input"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="my-label">Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            className="my-input"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="my-label">Email</Form.Label>
                        <Form.Control
                            type="email"
                            className="my-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group style={{ position: 'relative' }}>
                        <Form.Label className="my-label">Password</Form.Label>
                        <Form.Control
                            type={(typePassword) ? 'password' : 'text'}
                            className="my-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="btn-eye-password" type="button" onClick={showPassword}>
                            <img src={VisibilityIcon} alt="Show Password" />
                        </button>
                    </Form.Group>
                    <Form.Group style={{ position: 'relative' }}>
                        <Form.Label className="my-label">Confirm Password</Form.Label>
                        <Form.Control
                            type={(typeConfirmPassword) ? 'password' : 'text'}
                            className="my-input"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button className="btn-eye-password" type="button" onClick={showConfirmPassword}>
                            <img src={VisibilityIcon} alt="Show Password" />
                        </button>
                    </Form.Group>
                    <Form.Group>
                        <Button className="btn-block mt-4" type="submit" >{(loading) ? '... Register' : 'Register'}</Button>
                    </Form.Group>
                </Form>
            </main>
        </Wrapper>
    );
}

export default Register;