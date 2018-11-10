import React from 'react';
import { connect } from 'react-redux';
import { deleteingredient, searchrecipe } from '../actioncreator/action';
import { clearingredient } from '../actioncreator/action';

const List = (props) => {

    const { ingredient } = props; 
    const styles = {
        margin:'10px'
    }

    const handleClick = (id) =>{
        props.deleteingredient(id);
    }

    const check = ingredient && ingredient.length;

    return(
    <div className="col xl4 l7 push-l2 m8 push-m2 s10 push-s1"> 
        <div className="card white">
        <div className="card-content">
            <ul className="collection with-header">
            <li className="collection-header"><h5>Your Ingredients </h5></li>
            { check 
            ? ingredient.map(item => <li className="collection-item" key={item.id}><div>{item.name}<button className="secondary-content waves-effect waves-teal btn-flat" onClick={()=>handleClick(item.id)}>Remove </button></div></li>)
            : <li className="collection-item"><div>Put Items on the form </div></li> }
            </ul>
        </div>

        <div className="card-action">
        <button className="btn waves-effect waves-light" style={styles} onClick={ ()=> props.searchrecipe(props.ingredient)}> Search </button>
        <button className="btn waves-effect waves-light" onClick={props.clearingredient}> Clear </button>
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

const mapDispatchToProps = (dispatch) => {
    return{
        deleteingredient: (id) => {
            dispatch(deleteingredient(id))
        },
        clearingredient: () => {
            dispatch(clearingredient())
    
        },
        searchrecipe: (ingredient) => {
            dispatch(searchrecipe(ingredient))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
