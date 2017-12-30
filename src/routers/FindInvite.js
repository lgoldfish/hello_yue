import React, { Component } from "react";
import Header from "../component/Header"
import SelectInvite from "../component/SelectInvite"
import InviteLists from "../component/InviteLists"
class FindInvite extends Component {
    render(){
        return (
            <div>
                <Header caption="发现"/>
               <div className="select">
                <SelectInvite/>
                <InviteLists />
               </div>
            </div>
        )
    }
}
export default FindInvite