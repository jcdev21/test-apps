import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrap = styled.div`
    min-height: 20px;
    background: #ffffff;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 19px 23px;
    display: flex;
    align-items: center;
    cursor: pointer;

    .photo {
        min-width: 58px;
        width: 58px;
        height: 58px;
        background: #c4c4c4;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .info {
        padding: 11px 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h3 {
            font-size: 20px;
            font-weight: 400;
            color: #000000;
        }

        span {
            margin-top: -8px;
            font-size: 10px;
            color: rgba(0, 0, 0, 0.54);
        }
    }
`;

const Card = ({ photo, name, email }) => {
    return (
        <CardWrap>
            <div className="photo">
                <img src={photo} alt="Identity"/>
            </div>
            <div className="info">
                <h3>{name}</h3>
                <span>{email}</span>
            </div>
        </CardWrap>
    );
}

Card.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
}

export default Card;