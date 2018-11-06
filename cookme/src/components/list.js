import React from 'react';
import { connect } from 'react-redux';

const List = (props) => {

    const { ingredient } = props; 

    const check = ingredient && ingredient.length;

    return(
    <div className="col s4"> 
        <div className="card white">
        <div className="card-content">
            <ul className="collection with-header">
            <li className="collection-header"><h5>Your Ingredients </h5></li>
            { check 
            ? ingredient.map(item => <li className="collection-item" key={item.id}><div>{item.name}<a href="#!" className="secondary-content"><i className="material-icons">Remove </i></a></div></li>)
            : <li className="collection-item"><div>Put Items on the form </div></li> }
            </ul>
        </div>

        <div className="card-action">
          <a href="#" className="black-text"> Search </a>
          <a href="#" className="black-text"> Clear </a>
        </div>
      </div>
    </div>
    )
}

const mapStateToProps = (state) => {
    return{
        ingredient: state.ingredient
    }
}

export default connect(mapStateToProps)(List);
