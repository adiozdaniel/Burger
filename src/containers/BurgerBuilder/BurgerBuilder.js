import React, { Component} from "react";
import Aux from "../../hoc/Auxillary/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import INGREDIENT_PRICES from "../../constants/ingredient"
import Modal from "../../hoc/Layout/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
    };

    updatePurchaseState(updatedIngredients){
        // const ingredients = this.state.ingredients;
        const items = Object
                    .values(updatedIngredients)
                    .map(item => item)
                    .reduce((acc, item) => {
                        return acc + item}, 0);
                    // console.log(items); 
        this.setState({purchaseable: items > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {         
       const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
         this.updatePurchaseState(updatedIngredients);
    };

    componentDidMount(){
        // this.updatePurchaseState();
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseContinueHandler = () => {
        alert('Purchased Successfully');
        this.setState({purchasing: false});
        window.location.reload();
    }

    cancelHandler = () => {
        this.setState({purchasing: false});
    }

    render (){

        return(
            <Aux>
                <Modal show={this.state.purchasing} cancelled={this.cancelHandler}>
                        <OrderSummary 
                            ingredients={this.state.ingredients}
                            cancelled={this.cancelHandler}
                            purchaseContinue={this.purchaseContinueHandler}
                            price={this.state.totalPrice}
                        />
                </Modal>
            
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    addIngredients={this.addIngredientHandler}
                    removeIngredients={this.removeIngredientHandler}
                    price={this.state.totalPrice}
                    ingredients={this.state.ingredients}
                    purchaseable={this.state.purchaseable}
                    orderNow={this.purchaseHandler}
                    />
            </Aux>
        )
    }
};

export default BurgerBuilder;