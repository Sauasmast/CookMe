import React, { Component } from 'react';
import { connect } from 'react-redux';
import addpost from '../actioncreator/action';

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
        this.props.addpost(this.state.ingredients);
        document.getElementById('ingredients').value ='';
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
        { addpost: (ingredient) => dispatch(addpost(ingredient))} 
    )
}

export default connect(null, mapDispatchToProps)(Cookme);

