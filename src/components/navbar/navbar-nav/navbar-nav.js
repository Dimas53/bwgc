import React, {Component} from "react";
import DropdownMenu from "../dropdown/dropdown-menu";
import '../navbar-nav/navbar-nav.sass';

class Nav extends Component {

    state = {
        condition: false

    }

    changeClassHandler = () => {
        this.setState({
            condition: !this.state.condition
        });
    }


    render(props) {

        return (
            <div className="d-flex flex-grow-1 justify-content-center">
                <ul className="navibar_nav d-flex">
                    <li className="navibar_item active"><a href="foo" className="navibar_link">Home</a></li>
                    <li className="navibar_item"><a href="foo" className="navibar_link">About</a></li>
                    <li className="navibar_item"><a href="#" className="navibar_link">Services</a></li>

                    <DropdownMenu
                        classes={ this.state.condition ? "dropdown-menu show" : "dropdown-menu" }
                        classToggler={this.changeClassHandler}/>

                    <li className="navibar_item"><a href="#" className="navibar_link">Contact</a></li>
                </ul>
            </div>

        )

    }



}
export default Nav;