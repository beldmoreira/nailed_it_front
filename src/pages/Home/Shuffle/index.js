import { Container, ShuffleButton, Title } from "./style";
import Swal from "sweetalert2";
import { useEffect,useContext } from "react";
import api from "../../../services/api";
import {UserContext} from "../../../contexts/UserContext";
import {TokenContext} from "../../../contexts/TokenContext";

function Shuffle(){
    const { userData } = useContext(UserContext);
    const { token } = useContext(TokenContext);

    useEffect(() => {
        loadNailPolishes();
    },[]);
   
    function loadNailPolishes(){
    api.getNailPolishes(token,userData).then(res => {
        sortRandom(res.data);
    }).catch(err =>{
        Swal.fire({
          title: 'Error!',
          text: 'Check the info and try again,please',
          icon: 'error',
          confirmButtonText: 'Cool'
        });
      });
    }

    function sortRandom(){
        const nails = api.getNailPolishes(token,userData);
        const selected = nails[Math.floor(Math.random() * nails.length)];
        return selected;
    }

    return(
        <>
            <Container>
                <Title>Choose your nail polish of the week</Title>
                <ShuffleButton onClick={loadNailPolishes}>Shuffle!</ShuffleButton>
            </Container>
        </>
    );
}

export default Shuffle;