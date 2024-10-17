import React from "react";
import littlePrince from '../components/littlePrince.png';


function Image(){
    return (
        <div>
            <img
                src={littlePrince}
                style={{width:"300px", margin:"10px"}}
                alt="littlePrince"/>
        </div>
    )
}
export default Image;