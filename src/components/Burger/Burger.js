import React from "react"
import "./Burger.css"
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients"

const burger = props => {
    let receivedIngredients = Object
        .keys(props.ingredients)
        .map(igKey => [...Array(props.ingredients[igKey])] //turn the state object into array of ingredients
        .map((_, i) => <BurgerIngredient key={igKey + i} type={igKey} />
            ))
        .reduce((arr, el) => {      //to flatten the array
            return arr.concat(el);
        }, []);
    // console.log(receivedIngredients)
    if(receivedIngredients.length === 0){
        receivedIngredients = <p className="mb-6 text-rose-700 text-2xl text-center" 
                                >Please add Ingredients!
                            </p>
    }
    return (
        <div
            className="bg-gradient-to-tr from-rose-100 max-w-[280px] m-6 shadow-md p-3 rounded-lg shadow-rose-500 hover:shadow-rose-300"
        >
            <BurgerIngredient type='bread-top' />
                {receivedIngredients}
            <BurgerIngredient type='bread-bottom' />
           
        </div>
    )
}

export default burger;