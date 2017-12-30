import React, { Component } from "react";
import InviteLists from "../component/InviteLists"
import "../css/routers.css"
import Swiper from "swiper"
import 'swiper/dist/css/swiper.min.css';
import Link from "react-router-dom/Link";
var themeItemArray = [
    { title: "运动", icon: require("../images/theme/fitness.png"), router: '' },
    { title: "吃饭", icon: require('../images/theme/food.png'), router: '' },
    { title: "电影", icon: require('../images/theme/movie.png'), router: '' },
    { title: "K歌", icon: require('../images/theme/sing.png'), router: '' },
    { title: "演出", icon: require('../images/theme/yanchu.png'), router: '' },
    { title: "履行", icon: require('../images/theme/travel.png'), router: '' },
    { title: "购物", icon: require('../images/theme/Shopping.png'), router: '' },
    { title: "逛景区", icon: require('../images/theme/scenic.png'), router: '' },
    { title: "读书", icon: require('../images/theme/read.png'), router: '' },
    { title: "泡吧", icon: require('../images/theme/wine.png'), router: '' },
    { title: "宠物", icon: require('../images/theme/pet.png'), router: '' },
    { title: "拼车", icon: require('../images/theme/Car.png'), router: '' },
    { title: "合租", icon: require('../images/theme/rental.png'), router: '' },
]
class Index extends Component {
    render() {
        return (
            <div >
                <div className="top-localtion">
                    <i className="fa fa-snowflake-o"></i><i>4℃</i>
                    <span>上海</span><i className="fa fa-angle-down"></i>
                    <span>您的城市已发出500条邀请......</span>
                </div>
                <div className="swiper-container banner">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src={require("../images/1.3.jpg")} alt="" /></div>
                        <div className="swiper-slide"><img src={require("../images/1.4.jpg")} alt="" /></div>
                        <div className="swiper-slide"><img src={require("../images/1.jpg")} alt="" /></div>
                    </div>
                    <div className="swiper-pagination pagination1"></div>
                </div>
                <div className="themeItem">
                    <div className="swiper-container themeSwiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <ul>
                                    {
                                        themeItemArray.slice(0, 10).map((themeItem, i) => {
                                            return (<li key={i}>
                                                <img src={themeItem.icon} alt="" /> <br />
                                                <span> {themeItem.title}</span>
                                            </li>)
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="swiper-slide">
                                <ul>
                                    {
                                        themeItemArray.slice(10, 20).map((themeItem, i) => {
                                            return (<li key={i}>
                                                <img src={themeItem.icon} alt="" /> <br />
                                                <span> {themeItem.title}</span>
                                            </li>)
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="swiper-pagination pagination2"></div>
                    </div>
                </div>
                <InviteLists/>
            </div>
                    )
    }
    componentDidMount() {
        var bannerSwiper = new Swiper('.banner', {
                        speed:3000,
                        autoplay: {
                            delay:45000
                        },
            pagination: {
                        el: '.pagination1',
                clickable: true
            },
        })
        var themeSwiper = new Swiper('.themeSwiper', {
                        pagination: {
                        el: '.pagination2',
                clickable: true
            },
        })
    }
}
export default Index;