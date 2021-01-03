import { useState } from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';

// Components
import Wrapper from '../../../components/Wrapper';
import Navigation from '../../../components/Navigation';
import Header from '../../../components/Header';
import Carousel from '../../../components/Carousel';
import Utilities from '../../../components/Utilities';

// Image and Icon
import BurgerIcon from '../../../assets/Icons/menu.svg';
import Logo from '../../../assets/Icons/Logo_Apps.png';
import CancelIcon from '../../../assets/Icons/cancel_24px.svg';
import SearchIcon from "../../../assets/Icons/search_24px.svg";
import MaterialIcon from '../../../assets/Icons/card_giftcard_24pxsad.svg';
import ToolsIcon from '../../../assets/Icons/build_24px_outlined.svg';
import FittingIcon from '../../../assets/Icons/perm_data_setting_24px_outlined.svg';
import CeramicsIcon from '../../../assets/Icons/view_carousel_24px.svg';
import AcrylicIcon from '../../../assets/Icons/layers_24px_outlined.svg';
import OtherIcon from '../../../assets/Icons/category_24px.svg';
import Photo from '../../../assets/Icons/photo_size_select_actual_24px.svg';

const BackDrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 1;
`;

const carouselImages = [
    {
        image: Photo
    },
    {
        image: Photo
    },
    {
        image: Photo
    },
    {
        image: Photo
    },
    {
        image: Photo
    },
];

const utilityItems = [
    {
        name: 'Material',
        image: MaterialIcon
    },
    {
        name: 'Tools',
        image: ToolsIcon
    },
    {
        name: 'Fitting',
        image: FittingIcon
    },
    {
        name: 'Ceramics',
        image: CeramicsIcon
    },
    {
        name: 'Acrylic',
        image: AcrylicIcon
    },
    {
        name: 'Other',
        image: OtherIcon
    },
];

const HomeIndex = () => {

    const [displayMenu, setDisplayMenu] = useState(false);
    const [textSearch, setTextSearch] = useState('');

    const handleMenu = () => setDisplayMenu(c => !c);
    const closeMenu = () => setDisplayMenu(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('search.......');
    }

    return (
        <Wrapper>
            <Navigation />
            <Header
                type='logo'
                title=''
                imgNavMenu={BurgerIcon}
                imgLogo={Logo}
                widthNavMenu='23.25'
                activeMenu={displayMenu}
                click={handleMenu}
            />
            { (displayMenu) ? <BackDrop onClick={closeMenu} style={{ display: 'block', width: '100%' }} /> : '' }

            <main>
                <Form onSubmit={handleSubmit}>
                    <Form.Group style={{ position: 'relative' }}>
                        <Form.Control
                            type="text"
                            className="my-input search"
                            placeholder="Search"
                            value={textSearch}
                            onChange={(e) => setTextSearch(e.target.value)}
                        />
                        {
                            (textSearch.trim().length > 0) ?
                                <button className="btn-cancel" type="button" onClick={() => setTextSearch('')}>
                                    <img src={CancelIcon} alt="Cancel" />
                                </button>
                                :
                                ''
                        }
                        <button className="btn-search" type="submit">
                            <img src={SearchIcon} alt="Search" />
                        </button>
                    </Form.Group>
                </Form>
                <Carousel images={carouselImages} />
                <Utilities items={utilityItems} />
            </main>

        </Wrapper>
    );
}

export default HomeIndex;