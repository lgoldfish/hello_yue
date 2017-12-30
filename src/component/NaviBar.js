import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import "../css/component.css"
class NaviBar extends Component {
    render() {
        return (
            <ul className="nav-bar">
                <li><NavLink exact to='/' activeClassName='navi-active'>
                    <i className="fa fa-home fa-fw"></i><br />首页</NavLink></li>
                <li><NavLink exact to='/findInvite' activeClassName='navi-active' ><i className=" fa fa-search"></i> <br />发现</NavLink></li>
                <li><NavLink exact to='/invite' activeClassName='navi-active'><i className=" fa fa-send"></i> <br />发布</NavLink></li>
                <li><NavLink exact to='/community' activeClassName='navi-active'><i className=" fa fa-comments"></i> <br />社区</NavLink></li>
                <li><NavLink exact to='/mysetting' activeClassName='navi-active'><i className=" fa fa-user-circle-o"></i> <br />我的</NavLink></li>
            </ul>
        )
    }
}
export default NaviBar;