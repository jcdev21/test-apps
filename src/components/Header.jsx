import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const HeaderApp = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
    z-index: 999;

    #logo {
        margin-top: -15px;
    }
    .nav-menu {
        position: absolute;
        top: 0;
        left: 0;
        background: #ffffff;
        width: 31px;
        height: 31px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .title {
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        color: #212121, 100%;
    }

    .list-navigasi {
        position: absolute;
        top: 40px;
        left: 0;
        width: 136px;
        height: 148px;
        background: #FFFCFC;
        box-sizing: border-box;
        border: 1px solid #D0D0D0;
        box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        padding: 20px 10px;
        overflow: hidden;
        display: ${({ showMenu }) => (showMenu) ? 'block' : 'none'};

        ul {
            list-style-type: none;
        }
        li {
            list-style: none;
            margin-left: -2em;
            height: 33px;
            display: flex;
            align-items: center;

            a {
                text-decoration: none;
                color: #696767;
                font-size: 14px;
                font-weight: 500;
                line-height: 16px;
                letter-spacing: 0.5px;
            }
        }

        &::after {
            content: "V.1.0.0";
            position: absolute;
            left: 15px;
            bottom: 12px;
            font-size: 8px;
            font-weight: 500;
            letter-spacing: 0.005em;
            color: #696767;
        }
    }
`;

const Header = ({ type, title, imgNavMenu, imgLogo, widthNavMenu, activeMenu, click }) => {
    const history = useHistory();

    const handleLogout = (e) => {
        e.preventDefault();

        localStorage.removeItem('access-token-test-app');
        history.push('/login');
    }

    return (
        <HeaderApp showMenu={activeMenu}>
            <div
                className="nav-menu"
                onClick={click}
            >
                <img
                    src={imgNavMenu}
                    alt="Icon Navigasi"
                    width={widthNavMenu}
                />
            </div>
            {
                (type === 'logo') ?
                <img id="logo" src={imgLogo} alt="Logo"/>
                :
                <h2 className="title">{title}</h2>
            }

            <div className="list-navigasi">
                <ul>
                    <li>
                        <NavLink to="/user/list">User List</NavLink>
                    </li>
                    <li>
                        <NavLink to="/#" onClick={handleLogout}>Log Out</NavLink>
                    </li>
                </ul>
            </div>
        </HeaderApp>
    );
}

Header.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    imgNavMenu: PropTypes.string,
    imgLogo: PropTypes.string,
    widthNavMenu: PropTypes.string,
    activeMenu: PropTypes.bool,
    click: PropTypes.func,
}

export default Header;