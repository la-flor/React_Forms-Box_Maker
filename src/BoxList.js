// import NewBoxForm from './NewBoxForm';
import Box from './Box';
import React, { useState } from 'react';

function BoxList(color='red', width=100, height=100) {
    const defaultBox = {color:'red', width:100, height:100};
    const [boxes, setBoxes] = useState([defaultBox]);

    function addBox() {
        setBoxes(defaultBox)
    }

    return (
        <div id='BoxList'>
            
            { boxes.map(box => (
                <Box color={box.color} width={box.width} height={box.height} />
                )) 
            }
            <button onClick={() => addBox()} >Submit</button>
        </div>
    )
}



export default BoxList;