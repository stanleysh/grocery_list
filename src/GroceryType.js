import React from 'react';
import GroceryItem from './GroceryItem';

class GroceryType extends React.Component {

    state = {
        numberOf: this.props.amount,
        groceryType: this.props.groceryType,
        groceryItem: this.props.groceryItem
    };

    setAmount = (v) => {
        this.setState({ numberOf:v})
    };

    render() {
        return (
            <li className = {this.props.groceryType}>
                <GroceryItem groceryItem = {this.props.groceryItem} handleValueChange = {this.setAmount} value = {this.state.numberOf}/>
            </li>
        )
    }
}

export default GroceryType;