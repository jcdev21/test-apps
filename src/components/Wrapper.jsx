import styled from 'styled-components';

const Section = styled.section`
    position: relative;
    height: 100vh;
    max-width: var(--max-width-mobile);
    max-width: -webkit-var(--max-width-mobile);
    width: 100%;
    /* border: 1px solid #ccc; */
    padding: 27px;
    padding-top: 47px;
    overflow-y: auto;

    @media (min-width: 768px){
        max-width: var(--max-width-tablet);
        max-width: -webkit-var(--max-width-tablet);
        padding: 50px;
        padding-top: 60px;
    }

    @media (min-width: 1024px){
        max-width: var(--max-width-laptop);
        max-width: -webkit-var(--max-width-laptop);
        padding: 50px;
        padding-top: 60px;
    }
`;

const Wrapper = ({ children }) => {
    return <Section>
        { children }
    </Section>;
}

export default Wrapper;