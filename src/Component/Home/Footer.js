import { FooterContainer, CreditCard, Logo, Media } from "./homeStyles";
import { CartOutline } from 'react-ionicons';
import { SiInstagram, SiFacebook, SiTwitter, SiYoutube } from "react-icons/si";

export default function Footer (){
    return(
        <FooterContainer>
            <CreditCard>
                <h5>Cartões de Crédito</h5>
                <img src="https://zonasul.vtexassets.com/arquivos/logos-pagamentos.png" alt="credit cards"/>
            </CreditCard>
            <Logo>
                <CartOutline
                    color={'#00000'} 
                    height="50px"
                    width="50px"
                />
                <h5>Camp<br/>Market</h5>
            </Logo>
            <Media>
                <p>Siga nossas redes sociais</p>
                <span>
                    <div onClick={() => socialMedia("instagram")}>
                        <SiInstagram color="#fff"/>
                    </div>
                    <div onClick={() => socialMedia("twitter")}>
                        <SiTwitter color="#fff"/>
                    </div>
                    <div onClick={() => socialMedia("facebook")}>
                        <SiFacebook color="#fff"/>
                    </div>
                    <div onClick={() => socialMedia("youtube")}>
                        <SiYoutube color="#fff"/>
                    </div>
                </span>
            </Media>
        </FooterContainer>
    );
    function socialMedia(media){
        let website = "";
        if(media === "instagram"){
            website = "https://www.instagram.com"
        }
        else if(media === "facebook"){
            website = "https://pt-br.facebook.com"
        }
        else if(media === "youtube"){
            website = "https://www.youtube.com"
        }
        else if(media === "twitter"){
            website = "https://twitter.com/"
        }
        window.location.href = `${website}`;
    }
};