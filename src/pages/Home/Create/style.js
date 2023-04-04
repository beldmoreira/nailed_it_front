import styled from "styled-components";

const Form = styled.div`
  display: ${(props) => props.isOpen ? "initial" : "none"};

  width: 100%;
  height: 180px;

  margin-top: 100px;
  padding: 18px;

  background: #FFFFFF;
  border-radius: 5px; 
  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 36px;
  }
`;

const Container = styled.div`
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  font-family: 'Raleway', sans-serif;

  padding: 10px;
  margin-bottom:3px;
  margin-top:10px;
  border: 1px solid #3D415A;
  border-radius: 5px;
    
  font-size: 20px;
  line-height: 25px;
  background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
  color: ${(props) => props.disabled ? "#AFAFAF" : "#666666"};
  pointer-events: ${(props) => props.disabled ? "none" : "all"};

  &::placeholder{
    color: #DBDBDB;
    font-family: 'Dosis', sans-serif;
  }
`;

const CancelButton = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  width: 85px;
  height: 35px;

  pointer-events: ${(props) => props.disabled ? "none" : "all"};

  background-color: transparent;

  border-radius: 4.63636px;

  font-size: 15.976px;
  line-height: 20px;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  font-family: 'Dosis', sans-serif;
  text-align: center;
  color: #9462AC;

  border: none;
`;

const SaveButton = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  width: 84px;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${(props) => props.disabled ? 0.7 : 1};

  pointer-events: ${(props) => props.disabled ? "none" : "all"};

  background-color: #9462AC;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  font-family: 'Dosis', sans-serif;
  text-align: center;
  color: #FFFFFF;

  border-radius: 5px;
  border: none;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 15px;
`;

export {
    Form,
    Input,
    Container,
    SaveButton,
    CancelButton,
    Footer
}