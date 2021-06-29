import { Category } from './homeStyles';
import { AddOutline } from 'react-ionicons'

export default function Products({type}){
    return(
        <>
            <Category>
                <p>{type.toUpperCase()}</p>
                <button>
                    See more
                    <AddOutline
                        color={'#9A9A9A'} 
                        height="15px"
                        width="15px"
                        style={{ verticalAlign: 'middle' }}
                    />
                </button>
            </Category>
        </>
    )
}