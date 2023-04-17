import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;

    min-height:100vh;
    margin-top: 100px;
    padding: 30px 18px;

    display: flex;
    flex-direction: column;
    background: #F2F2F2;
    border-radius: 5px; 
`;

const Title = styled.span`
  font-size: 18px;
  font-weight:700;
  line-height: 29px;
  font-family: 'Montserrat', sans-serif;
  color: #6C5A84;
`;

const RegisterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const Button = styled.button`
    all: unset;
    box-sizing: border-box;
    cursor: pointer;

    width: 40px;
    height:40px;
   
    line-height: 20px;
    text-align: center;


    padding: 12px;
    color: #FFF;
    background-color:#9462AC;
    border:none;
    border-radius: 5px;
    img {
      align-self:center;
    }
`;



export {
  Container,
  RegisterContent,
  Title,
  Button
};