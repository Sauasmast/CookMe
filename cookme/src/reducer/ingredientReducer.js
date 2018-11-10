const initState = {ingredient: [],
                 recipes:[]};

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
                recipes:[]
            }

        case "ADD_RECIPE":
        console.log(action.recipes);
            return{
                ...state,
                recipes: action.recipes.data
            }

        case "RECIPE_ERROR":
        const error  = [...state.recipes, {id:action.error.status, title: action.error}];
        return{
            ...state,
            recipes: error
        }

        default:
            return state;
    }
}

export default ingredientReducer;