import React from 'react';
import GroceryItem from './GroceryItem';

class GroceryType extends React.Component {

    state = {
        numberOf: this.props.amount,
    };

    increaseAmount = () => {
        this.setState({ numberOf: this.state.numberOf + 1})
    };

    decreaseAmount = () => {
        if (this.state.numberOf == 0){
            console.log('Too low')
        } else {
        this.setState({ numberOf: this.state.numberOf -1})
        }
    }

    render() {
        return (
            <li className = {this.props.groceryType} id = { this.props.groceryItem }>
                <button type="button" className="decrease" onClick={ this.decreaseAmount }>-</button>
                {/* <input type="text" className="txt" value={value} onChange = { (event) => { updateValue(event.target.value) } }/> */}
                <span>{this.state.numberOf} {this.props.groceryItem}</span>
                <button type="button" className="increase" onClick={ this.increaseAmount }>+</button>
                {/* <GroceryItem groceryItem = {this.props.groceryItem}  value = {this.state.numberOf}/> */}
            </li>
        )
    }
}

export default GroceryType;