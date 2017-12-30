import React, { Component } from "react";
import "../css/component.css"
var invitelists = [
    { title: "诚招驴友/背包客2018年暑假去骑行去拉萨",picture:require("../images/head.png"), initiator: "路上红尘", sex: "women", location: "上海", destination: "拉萨", address: "", date: "2018年暑假", population: "5", payStyle: "AA" },
    { title: "邀球友，周六下午5点钟，上海国际会展中心体育场篮球馆一起打球",picture:require("../images/head2.png"), initiator: "长宁一帅", sex: "man", location: "上海", destination: "上海", address: "上海国际会展中心体育场B栋1层", date: "2018-1-10 14:00", population: "10", payStyle: "AA" },
    { title: "组团K歌，男女不限（最好有妹子呦）",picture:require("../images/head2.png"),  initiator: "王思聪", sex: "man", location: "上海", destination: "上海", address: "浦东新区四季酒店，天上人间KTV", date: "2018-1-15 18:00", population: "10", payStyle: "发起方付" },
    { title: "诚招驴友/背包客2018年暑假去骑行去拉萨",picture:require("../images/head.png"),  initiator: "路上红尘", sex: "women", location: "上海", destination: "拉萨", address: "", date: "2018年暑假", population: "5", payStyle: "AA" },
    { title: "邀球友，周六下午5点钟，上海国际会展中心体育场篮球馆一起打球",picture:require("../images/head2.png"),  initiator: "长宁一帅", sex: "man", location: "上海", destination: "上海", address: "上海国际会展中心体育场B栋1层", date: "2018-1-10 14:00", population: "10", payStyle: "AA" },
]
class InviteLists extends Component {
    render() {
        return (
            <div>
                <div className="invitNow">
                    <p>正在邀请</p>
                </div>
                <div className="line"></div>
                <div className="invitList">
                    <ul>
                        {
                            invitelists.map((val, i) => {
                                return (
                                    <li key={i}>
                                        <div className="item-one">
                                            <div className="item-one-left">
                                                <img src={val.picture} alt="" />
                                                <img src={
                                                    val.sex == 'man' ? require("../images/man.png") : require("../images/women.png")
                                                } alt="" />

                                                <br />
                                                <span>{val.initiator}</span>
                                            </div>
                                            <div className="item-one-right">
                                                <div className="item-one-right-top">
                                                    <img src={require("../images/local.png")} alt="" />
                                                    <span>{val.location}</span>
                                                    <img src={require("../images/ination.png")} alt="" />
                                                    <span>{val.destination}</span>
                                                    <img src={require("../images/pay.png")} alt="" />
                                                    <span>{val.payStyle}</span>
                                                </div>
                                                <div className="item-one-right-bottom">
                                                    <span>人数:</span> <i>{val.population}</i>
                                                    <span>日期:</span> <i>{val.date}</i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-two">
                                            <p>{val.title}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default InviteLists;