import React, { useState } from 'react';
import api from '../../services/api';
import { Container, Form, Input, Button, StyledLink } from '../../components/FormComponents';
import Logo from '../../components/Logo';
import { useNavigate } from 'react-router';
import {ThreeDots} from 'react-loader-spinner';
import Swal from 'sweetalert2';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '',lastName: '', email: '', password: '', confirmPassword: '' });
  const [loading,setLoading]= useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    api.signUp(formData).then(() => {
      setLoading(false);
      navigate("/login");
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

  return (
    <Container>
      <Logo/>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Name"
          type="text"
          onChange={(e) => handleChange(e)}
          name="name"
          value={formData.name}
          disabled={loading}
          required
        />
         <Input
          placeholder="Last Name"
          type="text"
          onChange={(e) => handleChange(e)}
          name="lastName"
          value={formData.lastName}
          disabled={loading}
          required
        />
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => handleChange(e)}
          name="email"
          value={formData.email}
          disabled={loading}
          pattern="^([\w\-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w\-]{2,3})$" 
          required
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => handleChange(e)}
          name="password"
          value={formData.password}
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{10,12}$"
          disabled={loading}
          required
        />
        <Input
          placeholder="Confirm password"
          type="password"
          onChange={(e) => handleChange(e)}
          name="confirmPassword"
          value={formData.confirmPassword}
          pattern={formData.password}
          disabled={loading}
          required
        />
        <Button type="submit" disabled={loading}>
        {
            loading
              ? <ThreeDots color="#FFFFFF" height={50} width={50} />
              : "Sign Up"
          }
        </Button>
      </Form>
      <StyledLink to="/login">Have an account? Login!</StyledLink>
    </Container>
  );
}

export default SignUp;