import { Brand, Container, Shade, Title } from "./style";
import React from "react";
import dump from "../../../../assets/dump.svg";


function NailPolish({id,name,brand,shade,handleDeleteNailPolish}){
    return(
        <Container>
            <Title>{name}</Title>
            <Brand>{brand}</Brand>
            <Shade>{shade}</Shade>
            <img src = {dump} alt ="Trash icon" onClick={() => handleDeleteNailPolish(id)}/>
        </Container>
    )
}

export default NailPolish;