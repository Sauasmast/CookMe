import React, { Component } from 'react';
import { connect } from 'react-redux';
import addingredient from '../actioncreator/action';

class Cookme extends Component{
    state = {
        ingredients:''
    }

    handleChange = (e) => {
        this.setState({
            ingredients: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.ingredients === ''){
            return
        }
        else{
        this.props.addingredient(this.state.ingredients);
        this.setState ({
            ingredients : ''
        })
        document.getElementById('ingredients').value ='';
        }
    }

    render(){
        return(
            <div className="col s12 card-panel white teal"> 
            <h3> Cook Me </h3> 
                <form onSubmit={this.handleSubmit}>
                <div className="input-field">
                <label htmlFor="ingredients" className="black-text"> What's On Your Fridge </label>
                <input type="text" id="ingredients" onChange={this.handleChange} />
                </div>
                <button className="btn waves-effect waves-light" type="submit" onClick={this.handleSubmit}> Add </button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return (
        { addingredient: (ingredient) => dispatch(addingredient(ingredient))} 
    )
}

export default connect(null, mapDispatchToProps)(Cookme);

