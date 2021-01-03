import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';

// Images and Icons
import PreviousIcon from '../../assets/Icons/arrow_back_ios_24px.svg';
import NextIcon from '../../assets/Icons/arrow_forward_ios_24px.svg';

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="btn-slide-forward" type="button" onClick={onClick}>
            <img src={NextIcon} alt="Forward"/>
        </button>
    );
}

const PreviousArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="btn-slide-back" type="button" onClick={onClick}>
            <img src={PreviousIcon} alt="Back"/>
        </button>
    );
}

const Carousel = ({ images }) => {

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
    };

    return (
        <Slider {...settings}>
            {
                (images.length > 0) ?
                images.map((image, i) => <img src={image.image} alt="Slide Pictures" key={i} />)
                :
                ''
            }
        </Slider>
    );
}

Carousel.propTypes = {
    images: PropTypes.array
}

export default Carousel;