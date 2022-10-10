import { useContext,useState} from "react";
import {UserContext} from "../../contexts/UserContext";
import {TokenContext} from "../../contexts/TokenContext";
import {ThreeDots} from 'react-loader-spinner';
import {CancelButton, Container, Footer, Form,Input, SaveButton} from './style';
import Swal from 'sweetalert2';
import api from '../../services/api';
import Header from "../../components/Header";



function Create({getNailPolishes, isOpen, closeForm}){
    const [formData, setFormData]= useState({name:"",brand:"",shade:"",finish:"",expirationDate:""})
    const [loading, setLoading] = useState(false);
    const { token } = useContext(TokenContext);
    const { userData } = useContext(UserContext);

    function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      setLoading(true);
      api.createNailPolish(formData,token,userData).then(() => {
        setLoading(false);
        setFormData({...formData,
        name:"",
        brand:"",
        shade:"",
        finish:"",
        expirationDate:""
      });
      closeForm();
      getNailPolishes();
      }).catch(err =>{
        Swal.fire({
          title: 'Error!',
          text: 'Check your info and try again,please',
          icon: 'error',
          confirmButtonText: 'Cool'
        });
        setLoading(false);
      });
    }
    
    return(
        <>
        <Header/>
            <Form onSubmit={handleSubmit} isOpen={isOpen}>
              <Container>
                <Input
                  placeholder="Name"
                  type="text"
                  name='name'
                  onChange={(e) => handleChange(e)}
                  value={formData.name}
                  disabled={loading}
                  required
                />
                <Input
                  placeholder="Brand"
                  type="text"
                  name="brand"
                  onChange={(e)=> handleChange(e)}
                  value={formData.brand}
                  disabled={loading}
                  required
                />
                <Input
                  placeholder="Shade"
                  type="text"
                  name="shade"
                  onChange={(e)=> handleChange(e)}
                  value = {formData.shade}
                  disabled={loading}
                  required
                />
                <Input
                  placeholder="Finish"
                  type="text"
                  name="finish"
                  onChange={(e)=> handleChange(e)}
                  value ={formData.finish}
                  disabled={loading}
                  required
                />
                <Input
                  placeholder="Expiration Date"
                  type="date"
                  onChange={(e)=> handleChange(e)}
                  value= {formData.expirationDate}
                  disabled = {loading}
                  required
                />
              </Container>
              <Footer>
                <CancelButton type="button" disabled = {loading} onClick={closeForm}>
                    Cancel
                </CancelButton>
                <SaveButton type="submit" disabled = {loading}>
                  {
                    loading
                    ?<ThreeDots color="#FFFFFF" height="11" width="43" /> 
                    :"Register"
                  }
                </SaveButton>
              </Footer>          
              
            </Form>
        </>  
    )
}

export default Create;