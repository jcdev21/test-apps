import styled from 'styled-components';

// Images and Icons
import Photo from '../assets/Icons/photo_size_select_actual_24px.svg';
import BackIcon from '../assets/Icons/arrow_back_ios_24px.svg';
import ForwardIcon from '../assets/Icons/arrow_forward_ios_24px.svg';

const Slide = styled.div`
    position: relative;
    margin-top: 30px;
    margin-bottom: 57px;
    height: 156px;
    background-position: center center;
    background-color: #f1f1f1;
    border-radius: 8px;

    @media (min-width: 768px){
        height: 256px;
    }

    @media (min-width: 1024px){
        height: 450px;
    }

    .btn-slide-back, .btn-slide-forward {
        border: 0px;
        background: transparent;
        padding: 0;
        position: absolute;
        top: 0;
        transform: translateY(0);
        height: 100%;
    }
    .btn-slide-back {
        left: 10px;
    }
    .btn-slide-forward {
        right: 10px;
    }
    .slide-doggle {
        position: absolute;
        bottom: -25.5px;
        left: 0;
        right: 0;
        text-align: center;
    }
    .slide-doggle .doggle {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #DADADA;
        box-sizing: border-box;
        margin: 0 1px;
        cursor: pointer;
    }
    .slide-doggle .doggle.active {
        border: 2px solid #666666;
    }

    .image-slide {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Slider = () => {
    return (
        <Slide>
            <div className="image-slide">
                <img src={Photo} alt="Slide Pictures" />
            </div>
            <button className="btn-slide-back" type="button">
                <img src={BackIcon} alt="Back"/>
            </button>
            <button className="btn-slide-forward" type="button">
                <img src={ForwardIcon} alt="Forward"/>
            </button>
            <div className="slide-doggle">
                <span className="doggle"></span>
                <span className="doggle active"></span>
                <span className="doggle"></span>
                <span className="doggle"></span>
                <span className="doggle"></span>
            </div>
        </Slide>
    );
}

export default Slider;