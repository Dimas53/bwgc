import React, {Component} from "react";
import DropdownMenu from "../dropdown/dropdown-menu";
import '../navbar-nav/navbar-nav.sass';

class Nav extends Component {
    state = {
        dropdown: [
            {classes: 'dropdown-menu'}
        ]
    }

    changeClassHandler = () => {
        console.log('Clicked')

        this.setState({
            classes: 'dropdown-menu show'
        })
    }


    render(props) {

        const drop = this.state.dropdown

        return (
            <div className="d-flex flex-grow-1 justify-content-center">
                <ul className="navibar_nav d-flex">
                    <li className="navibar_item active"><a href="foo" className="navibar_link">Home</a></li>
                    <li className="navibar_item"><a href="foo" className="navibar_link">About</a></li>
                    <li className="navibar_item"><a href="#" className="navibar_link">Services</a></li>


                    <DropdownMenu classes={drop[0].classes} classToggler={this.changeClassHandler}/>

                    <li onClick={this.changeClassHandler} className="navibar_item"><a href="#" className="navibar_link">Contact</a></li>
                </ul>
            </div>

        )

    }



}
export default Nav;