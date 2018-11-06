const initState = {ingredient: []};

const ingredientReducer = (state=initState, action) => {
    if (action.type === "ADD_POST"){
        let newingredient = {
            id : Math.random(),
            name: action.ingredient
        }
        let newState = [...state.ingredient, newingredient]
        return{
            ingredient: newState
        }
    }
    return state;
}

export default ingredientReducer;