import React from "react";
import Logo from "../../Layout/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems"
import './SideDrawer.css'
import Backdrop from "../../Layout/Modal/Backdrop";
import Aux from "../../../hoc/Auxillary";

const sideDrawer = (props) => {

    let attachedClasses = [ "SideDrawer", "Close"];

    if(props.open) {
        attachedClasses = [ "SideDrawer","Open"];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} >
                <Logo height="30%"/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    )
};

export default sideDrawer;