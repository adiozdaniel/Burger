import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './BurgerIngredients.css';
import BreadTop from '../../../assets/burger/BreadTop.png';
import Bacon from '../../../assets/burger/bacon.png';
import Cheese from '../../../assets/burger/cheese.png';
import Meat from '../../../assets/burger/meat.png';
import Salad from '../../../assets/burger/salad.png';
import BreadBottom from '../../../assets/burger/breadBottom.png';

class BurgerIngredient extends Component {

    render() {
        let ingredient = null;

    switch (this.props.type) {
        case('bread-top'):
             ingredient = <img 
                className='mt-5' src={BreadTop} alt='top' />;       
            break;        
            // ingredient = (
            //             <div className="BreadTop">
            //                 <div className="Seeds1"></div>
            //                 <div className="Seeds2"></div>
            //             </div>
            //             );
     case('bread-bottom'):
            // ingredient = <div className="BreadBottom"></div>;
            ingredient = <img 
                className='-mt-5' src={BreadBottom} alt='top' />;
            break;
        case('meat'):
            // ingredient = <div className="Meat"></div>;
            ingredient = <img 
                className='-mt-5' src={Meat} alt='top' />;
            break;
        case('cheese'):
            // ingredient = <div className="Cheese"></div>;
            ingredient = <img 
                className='-mt-5 -mb-10 z-30' src={Cheese} alt='top' />;
            break;
        case('salad'):
            // ingredient = <div className="Salad"></div>;
            ingredient = <img 
                className='-mt-10' src={Salad} alt='top' />;
            break;
        case('bacon'):
            // ingredient = <div className="Bacon"></div>;
            ingredient = <img 
                className='-mt-5' src={Bacon} alt='top' />;
            break;
        default:
            ingredient = null;
    }
    return ingredient;
    }
    
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;