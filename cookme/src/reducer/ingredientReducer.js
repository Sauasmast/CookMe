const initState = {ingredient: []};

const ingredientReducer = (state=initState, action) => {
    switch (action.type) {
        case "ADD_INGREDIENT":
            let newingredient = {
                id : Math.random(),
                name: action.ingredient
            }
            let newState = [...state.ingredient, newingredient]
            return{
                ingredient: newState
            }
        case "DELETE_INGREDIENT":
            newingredient = state.ingredient.filter(item => {
                return item.id !== action.id
            })
            return{
                ingredient: newingredient
            }
        case "CLEAR_INGREDIENT":
            return{
                ingredient: []
            }
        default:
            return state;
    }
}

export default ingredientReducer;