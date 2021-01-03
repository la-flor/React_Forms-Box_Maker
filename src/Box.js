import React from 'react';
import './Box.css';

const Box = ({ color, width, height, remove }) => {
    let styling = {backgroundColor: color, width: width, height: height}
    return (
        <div className='Box' style={styling}>
            <div className='removeDiv'>
                <button className='removeButton' onClick={remove}>X</button>
            </div>
        </div>
    )
}



export default Box;