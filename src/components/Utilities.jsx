import PropTypes from 'prop-types';
import styled from 'styled-components';

const Utility = styled.div`
    width: 100%;
    min-height: 85px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px 52px;

    &:last-child {
        margin-bottom: 80px;
    }

    @media (min-width: 768px){
        gap: 25px 15px;
    }

    @media (min-width: 1024px){
        gap: 25px 10px;
    }
`;

const UtilityCard = styled.div`
    flex: 1;
    width: 85px;
    height: 85px;
    background-color: #f1f1f1;
    border-radius: 8px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #2492F4;
    font-size: 12px;
    cursor: pointer;

    &:first-child {
        margin-left: 0;
    }

    &:last-child {
        margin-right: 0;
    }

    @media (min-width: 76px){
        height: 100px;
    }

    @media (min-width: 1024px){
        height: 150px;
    }
`;

const Utilities = ({ items }) => {

    return (
        <Utility>
            {
                items.map((item, i) => {
                    return <UtilityCard key={i}>
                        <img src={item.image} alt={item.name} width="55%" />
                        {item.name}
                    </UtilityCard>
                })
            }
        </Utility>
    );
}

Utilities.propTypes = {
    items: PropTypes.array
}

export default Utilities;