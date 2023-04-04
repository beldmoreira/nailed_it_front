import styled from 'styled-components';
import Header from '../../components/Header';
import NailPolishes from "./NailPolishes"

export default function Home() {
  return (
    <Header>
        <Container>
        <NailPolishes/>
        </Container>
    </Header>
  );
}

const Container = styled.div`
  padding: 30px;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  border:10px solid red; 

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;
