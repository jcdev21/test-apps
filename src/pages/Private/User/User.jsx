import { useEffect, useContext, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Header from "../../../components/Header";
import Navigation from "../../../components/Navigation";
import Wrapper from "../../../components/Wrapper";
import Card from "../../../components/Card";

// Image and Icon
import BackIcon from '../../../assets/Icons/arrow_back_ios_24px.svg';
import IdentityIcon from '../../../assets/Icons/perm_identity_24px.svg';
import { UserContext } from '../../../contexts/UserContext';
import { getUsers } from '../../../services/UserService';

const UserList = styled.div`
    margin-top: 33px;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    gap: 19px 0;
`;

const ParentFix = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 999;
`;

const ParentAddUser = styled.div`
    max-width: var(--max-width-mobile);
    max-width: -webkit-var(--max-width-mobile);
    width: 100%;
    position: relative;

    @media (min-width: 768px){
        max-width: var(--max-width-tablet);
        max-width: -webkit-var(--max-width-tablet);
    }
`;

const AddUser = styled.button`
    position: absolute;
    bottom: 110px;
    right: 27px;
    width: 66px;
    height: 65px;
    box-sizing: border-box;
    border: 0px;
    border-radius: 50%;
    color: #ffffff;
    background: #2492F4;
    font-size: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NoticeAndLoading = styled.h6`
    margin-top: 50px;
    text-align: center;
`;

const User = ({ history }) => {

    const { state, dispatch } = useContext(UserContext);
    const { users, isLoading } = state;

    const getDataUsers = useCallback(getUsers, []);

    const goBack = () => history.goBack();

    useEffect(() => {
        if (users.length > 0) return;

        dispatch({ type: 'LOADING' });
        getDataUsers()
            .then(datas => {
                const { data } = datas;

                dispatch({
                    type: 'SET_USERS',
                    payload: data
                })
            });
    }, [users, getDataUsers, dispatch]);

    return (
        <Wrapper>
            <Navigation />
            <Header
                type=''
                title='User List'
                imgNavMenu={BackIcon}
                imgLogo=''
                widthNavMenu='11.67'
                click={() => goBack()}
            />
            {
                (isLoading) ?
                <NoticeAndLoading>Loading...</NoticeAndLoading>
                :
                <UserList>
                    {
                        (users.length > 0) ?
                            users.map((user, i) => <Card photo={IdentityIcon} name={`${user.first_name} ${user.last_name}`} email={user.email} key={i} />)
                            :
                            <NoticeAndLoading>Users Empty</NoticeAndLoading>
                    }
                </UserList>
            }
            <ParentFix>
                <ParentAddUser>
                    <NavLink to={{ pathname: "/register", state: { prevPath: history.location.pathname } }}>
                        <AddUser>+</AddUser>
                    </NavLink>
                </ParentAddUser>
            </ParentFix>
        </Wrapper>
    );
}

export default User;