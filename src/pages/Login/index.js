import { useContext,useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../contexts/UserContext";
import {TokenContext} from "../../contexts/TokenContext";
import Swal from 'sweetalert2';
import {ThreeDots} from 'react-loader-spinner';
import api from '../../services/api';
import {Container, Form, Input, Button, StyledLink} from "../../components/FormComponents"
import Logo from "../../components/Logo";


function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const {setToken} = useContext(TokenContext);
  const {setUserData} = useContext(UserContext);
  const [loading,setLoading]= useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    api.login(formData).then(res => {
      localStorage.setItem("token", res.data);
      localStorage.setItem("userData");
      setToken(res.data);
      setUserData(res.data);
      setLoading(false);
      navigate("/nailpolishes");
    }).catch(err => {
      Swal.fire({
        title: 'Error!',
        text: 'Check your info and try again, please',
        icon: 'error',
        confirmButtonText: 'Cool'
      });
      setLoading(false);
    });
  }
  
    return (
        <Container>
            <Logo/> 
            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder="E-mail"
                    type="email"
                    onChange={(e) => handleChange(e)}
                    name="email"
                    value={formData.email}
                    disabled={loading}
                    required
                />
                <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="on"
                    onChange={(e) => handleChange(e)}
                    name="password"
                    value={formData.password}
                    disabled={loading}
                    required
                />
            <Button type="submit" disabled={loading}>
                {
                    loading
                    ?<ThreeDots color="#FFFFFF" height="11" width="43" /> 
                    :"Login"}
            </Button>
            </Form>
            <StyledLink to="/signup">First time? Sign Up!</StyledLink>
        </Container>
    )
}

export default Login;