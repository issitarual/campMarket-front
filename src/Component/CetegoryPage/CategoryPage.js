import Footer from '../Home/Footer';
import { Container } from './CategoryStyles'

export default function CategoryPage({name}){
    return(
        <Container>
            <h1>{name.toUpperCase()}</h1>
            <Footer/>
        </Container>
    )
}