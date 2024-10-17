import React from "react";
import Menu2 from "./Menu2";

function App2(props){
    return(
        <div>
            <Menu2 menu="아메리카노(HOT/ICE)" price={3000}/>
            <Menu2 menu="카페라떼(HOT/ICE)" price={3500}/>
        </div>
    )
}

export default App2;