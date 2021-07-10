import React from 'react';
import  {Nextbtn,Btn,Bar,Current} from './NextBtnStyle'

const NextBtn = (props) => {

    console.log(props);
    return(
        <Nextbtn>
            <Btn>
                <p ><i className="fas fa-angle-left"></i></p>
                <p onClick = {props.nextimg}><i className="fas fa-angle-right"></i></p>
            </Btn>
            <Bar></Bar>
            <Current></Current>
        </Nextbtn>
    )
}

export default NextBtn;