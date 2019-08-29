import React from 'react';

const groceryItem = ({groceryItem, handleValueChange, value}) => {


    const updateValue = (newValue) => {
        console.log(`Old value: ${value}`);
        handleValueChange(newValue);
        console.log(`New Value: ${value}`);
    }

    return (
        <div idName = {`${groceryItem}`}>
            <button type="button" className="decrease" onClick={ () => {updateValue(value-1) }}>-</button>
            {/* <input type="text" className="txt" value={value} onChange = { (event) => { updateValue(event.target.value) } }/> */}
            <span>{value} {groceryItem}</span>
            <button type="button" className="increase" onClick={ () => {updateValue(value+1) }}>+</button>
        </div>
    )
}

export default groceryItem;