import React from 'react';
import { connect } from 'react-redux';

const Recipe = (props) => {

    const { recipes } = props

    const check = recipes.length && recipes

    return (
        <div className="col s8">
                <ul className="collection">
                {check ? recipes.map(item => 
                <li key={item.id} className="collection-item avatar" >
                    <i className="material-icons circle">{item.id}</i>
                    <span className="title">{item.title}</span>
                    <p> Used Ingredient Count: {item.usedIngredientCount}<br /> </p>
                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>) :
                    <li key="Tauko" className="collection-item avatar">
                    <i className="material-icons circle">folder</i>
                    <span className="title">No Recipes </span>
                    <p> Please input the ingredient on the list and search for the recipes. </p>
                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                } 
            </ul>
      </div>
    )
    
}

const mapStateToProps = (state) =>{
    return{
        recipes : state.recipes
    }
}


export default connect(mapStateToProps)(Recipe);