import React from "react";
import logo from "../../Assets/images/taco-img.png"
import { Container, TacoWebAppLogo} from "./styles";

const Home = () => {

    return (
      <Container>
        <TacoWebAppLogo>
            
            <img src={logo} alt={"logo de taco web app"} /> 
            {/* arrumar tamanho da imagem */}
            
        </TacoWebAppLogo>
      </Container>
    );
}

export default Home;
