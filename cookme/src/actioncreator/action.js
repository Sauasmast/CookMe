import axios from 'axios';


const addingredient = (ingredient) => {
    return {
        type : "ADD_INGREDIENT",
        ingredient
    }
}

export const addrecipe = (recipes) => {
    console.log("Recipe form add recipes" + recipes);
    return {
        type: "ADD_RECIPE",
        recipes
    }
}

export const deleteingredient = (id) =>{
    return {
        type:"DELETE_INGREDIENT",
        id
    }
}

export const clearingredient = () =>{
    return {
        type:"CLEAR_INGREDIENT"
    }
}

export const recipeerror = (error) =>{
    return {
        type:"RECIPE_ERROR",
        error
    }
}

export const searchrecipe = (ingredient) =>{
    const querystring = ingredient.map(item => item.name.toLowerCase());
         return dispatch => {
        axios.get(process.env.REACT_APP_URL + encodeURIComponent(querystring), { 'headers': { 'X-Mashape-Key': process.env.REACT_APP_KEY } })
        .then((response => {
        //   console.log(response);
          dispatch(addrecipe(response));
        }))
        .catch((error) => {
            console.log(error);
        //   dispatch(recipeerror(error));
        })
    }
}

export default addingredient;
