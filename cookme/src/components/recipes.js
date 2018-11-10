import React from 'react';
import { connect } from 'react-redux';

const Recipe = (props) => {

    const { recipes } = props
    const style = { 
        width: "80px",
        height: "80px"
    }

    const check = recipes.length && recipes

    return (
        <div className="col s8">
                <ul className="collection">
                {check ? recipes.map(item => 
                <li key={item.id} className="collection-item avatar" >
                    <i className="material-icons circle"><img src={item.image} alt="Food" style={style}/></i>
                    <div className="info">
                    <span className="title">{item.title}</span>
                    <p> Used Ingredient Count: {item.usedIngredientCount}<br /> </p>
                    </div>
                    <a href="#!" className="secondary-content"><i className="material-icons"> Learn More </i></a>
                </li>) :
                    <li key="Tauko" className="collection-item avatar">
                    <i className="material-icons circle"> <img src='./food.jpg' alt="Food" style={style}/> </i>
                    <div className="info">
                    <span className="title">No Recipes </span>
                    <p> Please input the ingredient on the list and search for the recipes. </p>
                    </div>
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