import React, {useState} from 'react';

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        color: '-',
        width: 0,
        height: 0
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData.color, +formData.width, +formData.height);
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Color: &nbsp;
            <select 
                name='color'
                value={formData.color} 
                onChange={handleChange}>
                    <option value='-'>-</option>
                    <option value='red'>Red</option>
                    <option value='green'>Green</option>
                    <option value='blue'>Blue</option>
                    <option value='purple'>Purple</option>
                    <option value='orange'>Orange</option>
            </select>
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label>
                Width: &nbsp;
                <input 
                    name='width' 
                    type='number' 
                    placeholder='100'
                    value={formData.width} 
                    onChange={handleChange}>
                </input>
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label>
                Height: &nbsp;
                <input 
                    name='height' 
                    type='number' 
                    value={formData.height} 
                    onChange={handleChange}>
                </input>
            </label>
            <br/><br/>

            <button>Create Box!</button>
        </form>
    )
}



export default NewBoxForm;