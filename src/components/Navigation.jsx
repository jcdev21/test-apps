import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 999;

    @media (min-width: 1024px){
        height: 100%;
        width: auto;
        bottom: none;
    }

    .nav-button {
        text-decoration: none;
        flex: 1;
        width: 80px;
        height: 80px;
        padding: 15px;
        margin-left: 16px;
        margin-right: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #747373;
        font-size: 12px;
        gap: 5px;

        @media (min-width: 1024px){
            margin-left: 0px;
            margin-right: 0px;
            flex: 0;

            &:first-child {
                margin-top: 50px;
            }
        }
    }

    .nav-button svg {
        width: 100%;
    }

    .nav-button.active {
        color: #2492F4;
    }

    .nav-button.active svg path {
        fill-opacity: 1;
        fill: #2492F4;
    }
`;

const Navbar = styled.div`
    max-width: var(--max-width-mobile);
    max-width: -webkit-var(--max-width-mobile);
    width: 100%;
    height: 81px;
    background: #ffffff;
    border-top: 1px solid rgba(0, 0, 0, .2);
    box-shadow: 0 -2px 5px rgba(0, 0, 0, .25);
    display: flex;

    @media (min-width: 1024px){
        width: auto;
        height: 100%;
        flex-direction: column;
        gap: 20px;
    }
`;

const Navigation = () => {
    return (
        <Nav>
            <Navbar>
                <NavLink to="/" className="nav-button" exact>
                    <svg viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.29166 13.2291H0.916656L15.5 0.104156L30.0833 13.2291H25.7083V24.8958H16.9583V16.1458H14.0417V24.8958H5.29166V13.2291ZM22.7917 10.5896L15.5 4.02707L8.20832 10.5896V21.9792H11.125V13.2292H19.875V21.9792H22.7917V10.5896Z" fill="black" fillOpacity="0.54"/>
                    </svg>
                    Home
                </NavLink>
                <NavLink to="/cart" className="nav-button">
                    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="add_shopping_cart_24px">
                            <path id="icon/action/add_shopping_cart_24px" fillRule="evenodd" clipRule="evenodd" d="M17.4 11.875H14.9V8.125H11.15V5.625H14.9V1.875H17.4V5.625H21.15V8.125H17.4V11.875ZM7.41249 25.625C7.41249 24.25 8.52499 23.125 9.89999 23.125C11.275 23.125 12.4 24.25 12.4 25.625C12.4 27 11.275 28.125 9.89999 28.125C8.52499 28.125 7.41249 27 7.41249 25.625ZM22.4 23.125C21.025 23.125 19.9125 24.25 19.9125 25.625C19.9125 27 21.025 28.125 22.4 28.125C23.775 28.125 24.9 27 24.9 25.625C24.9 24.25 23.775 23.125 22.4 23.125ZM20.5875 16.875H11.275L9.89999 19.375H24.9V21.875H9.89999C7.99999 21.875 6.79999 19.8375 7.71249 18.1625L9.39999 15.1125L4.89999 5.625H2.39999V3.125H6.48749L11.8125 14.375H20.5875L25.425 5.625L27.6 6.825L22.775 15.5875C22.35 16.3625 21.525 16.875 20.5875 16.875Z" fill="black" fillOpacity="0.54" />
                        </g>
                    </svg>
                    Cart
                </NavLink>
                <NavLink to="/account" className="nav-button">
                    <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="perm_identity_24px">
                            <path id="icon/action/perm_identity_24px" fillRule="evenodd" clipRule="evenodd" d="M17.5 5.83334C14.2771 5.83334 11.6667 8.44376 11.6667 11.6667C11.6667 14.8896 14.2771 17.5 17.5 17.5C20.7229 17.5 23.3333 14.8896 23.3333 11.6667C23.3333 8.44376 20.7229 5.83334 17.5 5.83334ZM20.4167 11.6667C20.4167 10.0625 19.1042 8.75001 17.5 8.75001C15.8958 8.75001 14.5833 10.0625 14.5833 11.6667C14.5833 13.2708 15.8958 14.5833 17.5 14.5833C19.1042 14.5833 20.4167 13.2708 20.4167 11.6667ZM26.25 24.7917C25.9583 23.7563 21.4375 21.875 17.5 21.875C13.5625 21.875 9.04166 23.7563 8.75 24.8063V26.25H26.25V24.7917ZM5.83333 24.7917C5.83333 20.9125 13.6062 18.9583 17.5 18.9583C21.3937 18.9583 29.1667 20.9125 29.1667 24.7917V29.1667H5.83333V24.7917Z" fill="black" fillOpacity="0.54" />
                        </g>
                    </svg>
                    Account
                </NavLink>
            </Navbar>
        </Nav>
    );
}

export default Navigation;