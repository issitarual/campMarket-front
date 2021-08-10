
import styled from 'styled-components';
import {useEffect,useRef} from 'react'
export default function Account({user,edit,setEdit,clicked,text,loading}){

    const inputRef=useRef();

    useEffect(() => {
        if (clicked) {
          inputRef.current.focus()
          }    
      }, [clicked]);


    function handleChange(e) {
        setEdit(e.target.value);
       
    }

    return(
        <Info>
            <span>{text}:</span>     
            {
                clicked?
                <input
                ref={inputRef}
                placeholder=""
                value={edit}
                disabled={loading}
                onChange={handleChange}
                />:
                <div>
                    <p>{user}</p>
                </div>
            }
        </Info>            
);

}


const Info =styled.div ` 
font-family: 'Roboto', sans-serif;
margin-top:20px;
width:100%;
display:flex;
flex-direction: column;

    span{
        display:block;
        margin-bottom:5px;
        font-weight: bold;
    }

div,input{
    border: 2px solid #ccc;
    width: 429px;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
    background-color: #fff;
}


@media (max-width: 670px){
    align-items: center;
    justify-content: center;

div,input{
    width:100%;
}
}
`;
