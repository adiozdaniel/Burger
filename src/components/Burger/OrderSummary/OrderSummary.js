import React from "react";
import Aux from "../../../hoc/Auxillary/Auxillary";
// import Button from "../../Buttons/Button";

const orderSummary = props => {

    const ingredientSummary = Object
        .keys(props.ingredients)
        .map((igKey, index) => {
            return <li key={igKey + index} >
                    <span className="uppercase" >
                        {igKey}: {props.ingredients[igKey]}
                    </span>                
                </li>
        })

    return (
        <Aux>
            <h3 className="font-bold text-2xl text-rose-700" >Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p className="font-semibold" >Total Price: <span className="text-green-700 text-xl">$ {props.price.toFixed(2)}</span> </p>
            <p className="text-sm text-gray-700" >Continue to Checkout?</p>
            <div className='flex justify-between items-center flex-col' >
                {/* <Button btnType='Danger Button' >cancel ?</Button>
                <Button btnType='Success Button' >Checkout</Button> */}
                
            <button 
                    onClick={props.purchaseContinue}
                    className='bg-slate-900 text-yellow-500 px-6 py-1 rounded-full shadow shadow-yellow-500' >
                        CONTINUE
            </button>
            <button 
                    onClick={props.cancelled}
                    className='bg-slate-900 m-3 text-red-500 px-6 py-1 rounded-full shadow shadow-rose-500' 
                    >
                        CANCEL
            </button>
            </div>
            
        </Aux>
    )
}

export default orderSummary;