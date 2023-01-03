import React, { Component} from "react";
import Aux from "../../hoc/Auxillary"
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {

    state = {
        showSideDrawer: false,
    }

    SideDrawerClosedHandler = ()=> {
        this.setState({showSideDrawer: false});
    }

    SideDrawerOpenHandler = ()=> {
        this.setState({showSideDrawer: true});
    }

    render() {
        return (
             <Aux>
        <div>
            <Toolbar drawerToggle={this.SideDrawerOpenHandler} />
            <SideDrawer 
                open={this.state.showSideDrawer} 
                closed={this.SideDrawerClosedHandler}
            />
        </div>
        <main className='LayoutContent flex flex-col justify-center items-center' >
            {this.props.children}
        </main>
    </Aux>
        )
    }
}
export default Layout;