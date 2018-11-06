const addingredient = (ingredient) => {
    return {
        type : "ADD_INGREDIENT",
        ingredient
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

export default addingredient;