const initState = {ingredient: [],
                 recipes:[{title:"No Recipes"}]};

const ingredientReducer = (state=initState, action) => {
    switch (action.type) {
        case "ADD_INGREDIENT":
            let newingredient = {
                id : Math.random(),
                name: action.ingredient
            }
            let newState = [...state.ingredient, newingredient]
            return{
                ...state,
                ingredient: newState
            }
        case "DELETE_INGREDIENT":
            newingredient = state.ingredient.filter(item => {
                return item.id !== action.id
            })
            return{
                ...state,
                ingredient: newingredient
            }
        case "CLEAR_INGREDIENT":
            return{
                ingredient: [],
                recipe:[]
            }
        case "ADD_RECIPE":
            return{
                ...state,
                recipes: action.recipes
            }
        default:
            return state;
    }
}

export default ingredientReducer;