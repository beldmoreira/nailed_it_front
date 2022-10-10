import { Container, ShuffleButton, Title } from "./style";
import Header from "../../components/Header";



function Shuffle(){
    return(
        <>
        <Header/>
            <Container>
                <Title>Choose your nail polish of the week</Title>
                <ShuffleButton>Shuffle!</ShuffleButton>
            </Container>
        </>
    );
}

export default Shuffle;