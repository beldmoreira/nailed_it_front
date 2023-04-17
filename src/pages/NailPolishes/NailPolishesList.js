import React from "react";
import styled from "styled-components";
import NailPolish from "./NailPolish";

function NailPolishesList({nailPolishes,handleDeleteNailPolish}){
    if (!nailPolishes) {
        return (
          <Subtitle>
            You don't have any nail polish. Register one to nail it!
          </Subtitle>
        )
      }
    
      return (
        nailPolishes.map((nailPolish) => (
          <NailPolish
            key={nailPolish.id}
            name={nailPolish.name}
            brand = {nailPolish.brand}
            handleDeleteNailPolish ={handleDeleteNailPolish}
          />
        ))
      )
}

const Subtitle = styled.p`
  margin-top: 28px;

  font-size: 18px;
  line-height: 22px;

  color: #BABABA;
`;

export default NailPolishesList;