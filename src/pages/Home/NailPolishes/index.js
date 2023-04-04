import { useState, useEffect,useContext } from "react";
import api from "../../../services/api";
import{Container, RegisterContent, Title,Button } from "./style";
import NailPolishesList from "./NailPolishesList";
import Create from "../Create";
import Plus from "../../../assets/plus.svg";
import {UserContext} from "../../../contexts/UserContext";
import {TokenContext} from "../../../contexts/TokenContext";
import Swal from "sweetalert2";

export default function NailPolishes(){
    const [nailPolishes,setNailPolishes] = useState(null);
    const [isCreateNailPolishFormOpen, setIsCreateNailPolishFormOpen] = useState(false);
    const { userData } = useContext(UserContext);
    const { token } = useContext(TokenContext);

    useEffect(() => {
        loadNailPolishes();
    },[]);
   
    function loadNailPolishes(){
    api.getNailPolishes(token,userData).then(res => {
        setNailPolishes(res.data);
    }).catch(err =>{
        Swal.fire({
          title: 'Error!',
          text: 'Check the info and try again,please',
          icon: 'error',
          confirmButtonText: 'Cool'
        });
      });
    }

    function handleDeleteNailPolish(id){
        api.deleteNailPolish(token,id).then(res => {
            loadNailPolishes();
        }).catch(err =>{
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong... Try again,please',
                icon: 'error',
                confirmButtonText: 'Cool'
              });
        })
    }
   
     return(
        <Container>
            <RegisterContent>
                <Title>My Nail Polishes</Title>
                <Button onClick={() => setIsCreateNailPolishFormOpen(true)}>
                <img alt="plus.svg" src={Plus} />
                </Button>
            </RegisterContent>

            <Create
                isOpen={isCreateNailPolishFormOpen}
                closeForm={() => setIsCreateNailPolishFormOpen(false)}
                loadNailPolishes={loadNailPolishes}
            />

            <NailPolishesList   nailPolishes={nailPolishes} handleDeleteNailPolish={handleDeleteNailPolish} />
        </Container>
      );
}