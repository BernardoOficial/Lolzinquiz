import styled from 'styled-components';

const Wrapper = styled.section`
    margin-left: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 590px) {
        margin-left: 0;
        margin: 0 auto;
    }
`

export default Wrapper;