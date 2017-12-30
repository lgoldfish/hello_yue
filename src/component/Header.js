import React, { Component } from "react";
import Divider from "antd/lib/divider";
import history from 'history/createBrowserHistory' 
import styles from  "../css/component.css"
console.log("styles is",styles)
class Header extends Component {
    constructor(props){
        super(props)
        this.goBack = this.goBack.bind(this)
        this.state = {
            caption:props.caption
        }
    }
    render(){
        return (
            <div className="header">
                <img onClick={this.goBack} src={require("../images/back.png")}  alt=""/>
                {console.log(this.props)}{this.state.caption}
                <img style = {{position:"absolute",top:"10px",right:"10px"}} src={require("../images/user.png")} alt=""/>
            </div>
        )
    }
    goBack(){
        history.goBack()  
    }
}
Header.defaultProps = {
    caption:"嗨约"
}
// Header.propTypes = {
//     caption:PropTypes.string
// }
export default Header 