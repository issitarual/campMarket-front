import { DeliveryContainer, Local, Transportation } from './homeStyles';
import { LocationOutline, RocketOutline } from 'react-ionicons'

export default function Delivery(){
    return(
        <DeliveryContainer>
            <Local>
                <LocationOutline
                    color={'#9A9A9A'} 
                    height="25px"
                    width="25px"
                />
                <div></div>
                <h6>Deliver in</h6>
                <p>Rio de Janeiro,RJ</p>
            </Local>
            <Transportation>
                <p>Delivery<br/>CampMarket</p>
                <RocketOutline
                    color={'#EF4F4F'} 
                    height="25px"
                    width="25px"
                />
            </Transportation>
            
        </DeliveryContainer>
    )
}