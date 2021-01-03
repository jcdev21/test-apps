import { useEffect, useContext, useCallback } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../contexts/UserContext';

// Components
import Header from "../../../components/Header";
import Navigation from "../../../components/Navigation";
import Wrapper from "../../../components/Wrapper";

// Image and Icon
import BackIcon from '../../../assets/Icons/arrow_back_ios_24px.svg';
import IdentityIcon from '../../../assets/Icons/perm_identity_24px.svg';

// Services
import { getPersonal } from '../../../services/UserService';

const ProfilCard = styled.div`
    margin-top: 28px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    text-align: center;

    .photo {
        width: 137px;
        height: 137px;
        background: #c4c4c4;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h3 {
        margin-top: 26px;
        font-size: 20px;
        font-weight: 400;
        color: #000000;
    }

    span {
        margin-top: -8px;
        font-size: 10px;
        color: rgba(0, 0, 0, 0.54);
    }
`;

const AccountIndex = ({ history }) => {

    const { state, dispatch } = useContext(UserContext);
    const { personal, isLoading } = state;

    const getDataPersonal = useCallback(getPersonal, []);

    const goBack = () => history.goBack();

    useEffect(() => {
        if (personal.first_name !== '') return;

        dispatch({ type: 'LOADING' });
        getDataPersonal()
            .then(datas => {
                const { data } = datas;

                dispatch({
                    type: 'SET_PERSONAL',
                    payload: data
                });
            });

    }, [personal, getDataPersonal, dispatch]);

    return (
        <Wrapper>
            <Navigation />
            <Header
                type=''
                title='My Account'
                imgNavMenu={BackIcon}
                imgLogo=''
                widthNavMenu='11.67'
                click={() => goBack()}
            />
            <ProfilCard>
                {
                    (isLoading) ?
                    <h3>Loading...</h3>
                    :
                    <>
                        <div className="photo">
                            <img src={IdentityIcon} alt="Identity" width="45%" />
                        </div>
                        <h3>{`${personal.first_name} ${personal.last_name}`}</h3>
                        <span>{personal.email}</span>
                    </>
                }
            </ProfilCard>
        </Wrapper>
    );
}

export default AccountIndex;