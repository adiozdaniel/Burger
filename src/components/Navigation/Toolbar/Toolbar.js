import React from "react";
import './Toolbar.css'
import Logo from "../../Layout/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = props => (
    <header className="Toolbar" >
        <DrawerToggle clicked={props.drawerToggle}/>
        <Logo height="110%"/>
        <nav className="DesktopOnly" >
            <NavigationItems/>
        </nav>
        
    </header>
)

export default toolbar;