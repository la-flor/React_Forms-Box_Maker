import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css'

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    function addBox(color, width, height) {
        setBoxes(boxes => [...boxes, {color, width, height}])
    }

    function removeBox(idx) {
        setBoxes(boxes => {
            let boxCopy = [...boxes];
            boxes.splice(idx,1);
            return boxCopy;
        });
    }

    return (
        <div id='BoxList'>
            <h1>
                Build your React box!
            </h1>
            <NewBoxForm addBox={addBox}/>
            
            { boxes.map((box, idx) => (
                <Box remove={() => removeBox(idx)} color={box.color} width={box.width} height={box.height} />
                )) 
            }
        </div>
    )
}



export default BoxList;