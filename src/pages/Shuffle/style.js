import styled from "styled-components";

const ShuffleButton = styled.button`
    all: unset;
    box-sizing: border-box;
    cursor: pointer;

    width: 100%;
    margin-top:50px;

    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
    font-family: 'Dosis', sans-serif;
    text-align: center;


    padding: 12px;
    color: #FFF;
    background-color:#9462AC;
    border-radius: 5px;
`;

const Title = styled.span`
    font-size: 22px;
    font-weight:700;
    line-height: 29px;
    font-family: 'Montserrat', sans-serif;
    color: #6C5A84;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;

    min-height:100vh;
    padding: 18px;

    display: flex;
    flex-direction: column;
    justify-content:center;
    word-break: break-all;
    background-color: #F2F2F2;
`

export{
    ShuffleButton,
    Title,
    Container
}