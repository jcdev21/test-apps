import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const ToastWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

const ToastCard = styled.div`
    width: 362px;
    min-height: 100px;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    padding: 18px 14px;

    .text-notice {
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0.5px;
        color: #3F3F3F;
        margin-top: 10px;
        margin-bottom: 25px;
    }
`;

const Toast = ({ status, texts, click }) => {

    return (
        <ToastWrap>
            <ToastCard>
                {
                    (status) ?
                        <>
                            <div className="text-notice">
                                <span style={{ display: 'block' }}>Congratulations!<br/>{texts.message}</span>
                            </div>
                            <Button
                                className="btn-block"
                                onClick={click}
                            >Log In</Button>
                        </>
                        :
                        <>
                            <div className="text-notice">
                                {
                                    texts.map((text, i) => <span key={i} style={{ display: 'block' }}>{text.msg}</span>)
                                }
                            </div>
                            <Button
                                className="btn-block"
                                style={
                                    { background: 'rgba(255, 0, 0, 0.2)', border: '1px solid #FF0000', color: '#FF0000' }
                                }
                                onClick={click}
                            >Ok</Button>
                        </>
                }
            </ToastCard>
        </ToastWrap>
    );
}

Toast.propTypes = {
    status: PropTypes.bool,
    texts: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    click: PropTypes.func
}

export default Toast;