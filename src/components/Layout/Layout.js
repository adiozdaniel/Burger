import React from "react";
import Aux from '../../hoc/Auxillary'
import './Layout.css';

const layout = (props) => (
    <Aux>
        <div>
            ToolBar, 
            SideDrawer, 
            Backdrop
        </div>
        <main className='LayoutContent' >
            {props.children}
        </main>
    </Aux>
    
);

export default layout;