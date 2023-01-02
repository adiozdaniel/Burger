import React from "react";
import './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";
import CONTROLS from "../../../constants/controlButtons"

const buildControls = props => (

    <div className="BuildControls" >
        <p>Current Price: $ <strong>{props.price.toFixed(2)}</strong> </p>
        {CONTROLS.map(ctrl =>(           
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                // type={ctrl.type}
                price={()=> props.price}
                added={()=> props.addIngredients(ctrl.type)}
                removed={()=> props.removeIngredients(ctrl.type)}
                disabled = {props.ingredients[ctrl.type]}
            />
        ))}
        <button
            disabled={!props.purchaseable}
            className="OrderButton"
            // className="bg-slate-900 text-yellow-200 px-6 py-1 rounded-full shadow-lg shadow-orange-900 hover:bg-slate-700 hover:text-yellow-400"
        >
            ORDER NOW
        </button>
    </div>

);

export default buildControls;