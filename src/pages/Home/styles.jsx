import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const TextCard = styled.div`
    display: flex;
    align-items: center;    
    justify-content: center;
`

const TextInfo = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    justify-content: center;
    display: flex;
    align-items: center;
`


export { Container, TextCard, TextInfo }