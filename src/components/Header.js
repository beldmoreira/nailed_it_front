import React from "react";
import miniLogo from "../assets/mini-logo.png"
import styled from "styled-components";

function Header(){
    return (
        <Container>
        <img src ={miniLogo} alt = "Logo" style={{width: 100, height:100}}/>
        <Slogan>
        <WhiteSlogan>NAIL</WhiteSlogan><PinkSlogan>CHOOSER</PinkSlogan>
        </Slogan>
        </Container>
    )
}

export default Header;

const Container = styled.header`
  width: 100%;
  height: 100px;
  padding: 0px 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 1;

  background: #3D415A;
  
`;

const Slogan = styled.span`
    font-size:15px;
    font-style: normal;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    
`;
const WhiteSlogan = styled.span`
    color:#EBE3DA;
`;

const PinkSlogan = styled.span`
    font-weight: 700;
    color:#DB7DF0;
`;

export {
    Container,
    Slogan,
    WhiteSlogan,
    PinkSlogan
}
