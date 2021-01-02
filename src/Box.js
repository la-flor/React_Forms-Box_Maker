import React from 'react';
import './Box.css';

const Box = ({ color, width, height }) => {
    let styling = {backgroundColor: color, width: width, height: height}
    return (
        <div className='Box' style={styling}></div>
    )
}



export default Box;