import axios from 'axios';


const recipe =  [{id: 556470, title: "Apple fritters", image: "https://spoonacular.com/recipeImages/556470-312x231.jpg", imageType: "jpg", usedIngredientCount: 3},
{id: 47950, title: "Cinnamon Apple Crisp", image: "https://spoonacular.com/recipeImages/47950-312x231.jpg", imageType: "jpg", usedIngredientCount: 3},
{id: 534573, title: "Brown Butter Apple Crumble", image: "https://spoonacular.com/recipeImages/534573-312x231.jpg", imageType: "jpg", usedIngredientCount: 3},
{id: 47732, title: "Apple Tart", image: "https://spoonacular.com/recipeImages/47732-312x231.jpg", imageType: "jpg", usedIngredientCount: 3},
{id: 47891, title: "Apple Tart", image: "https://spoonacular.com/recipeImages/47891-312x231.jpg", imageType: "jpg", usedIngredientCount: 3}
]

const addingredient = (ingredient) => {
    return {
        type : "ADD_INGREDIENT",
        ingredient
    }
}

export const addrecipe = (recipes) => {
    console.log("Add recipe");
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

export const searchrecipe = () =>{
    return dispatch => {
        dispatch(addrecipe(recipe));
    }
  
    // return dispatch => {
    //     axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5&ranking=1', { 'headers': { 'X-Mashape-Key': '' } })
    //     .then((response => {
    //       console.log(response.data);
    //     }))
    //     .catch((error) => {
    //       console.log(error);
    //     })
    // }
}

export default addingredient;
