import React, { Component } from "react";
import { Radio, Select,Input,Button } from 'antd';
import Header from "../component/Header"
import Cascaders from "../component/Cascader"
import { themeArray } from "../config"
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const { TextArea } = Input;
class Invite extends Component {
    state = {
        sex: "man",
    }
    onChangeSex = (e) => {
        console.log('radio checked', e.target.value);
    }
    onChangePay = (e) => {
        console.log('radio checked', e.target.value);
    }
    handleChangeAge(value) {
        console.log(`selected ${value}`);
    }
    render() {
        return (
            <div>
                <Header caption="发布" />
                <RadioGroup defaultValue="yundong">
                    {themeArray.map((val, i) => {
                        return (
                            <RadioButton key={i} value={val.value}>{val.title}</RadioButton>
                        )
                    })}
                </RadioGroup>
                <Cascaders />
                <span className="inviteTitle">邀请对象</span>
                <div className="inviteObj">
                <RadioGroup  className="onChangeSex" onChange={this.onChangeSex} value={this.state.sex}>
                    <Radio value={"nam"}>男</Radio>
                    <Radio value={"women"}>女</Radio>
                    <Radio value={"all"}>不限</Radio>
                    </RadioGroup>
                    <Select className="changeAge" defaultValue="年龄不限" style={{ width: 120 }} onChange={this.handleChangeAge}>
                    <Option value="18-25">18-25</Option>
                    <Option value="26-36">26-35</Option>
                    <Option value="37-46">36-45</Option>
                    <Option value="47--">46岁以上</Option>
                    <Option value="年龄不限">年龄不限</Option>
                </Select>
                <Input className="numInput" placeholder="邀请人数" />
                </div>
                <span className="inviteTitle">付款方式</span>
                <RadioGroup onChange={this.onChangePay} value="AA">
                    <Radio value={"AA"}>AA</Radio>
                    <Radio value={"inviter"}>发起方付</Radio>
                    </RadioGroup>
                <span className="inviteTitle">标题</span>
                <Input placeholder="请输入本次邀请的标题" />
                <span className="inviteTitle">活动内容及备注</span>
                <TextArea rows={4} />
                <Button type="primary" className="fabuButton" size="large">发布邀请</Button>
            </div>
        )
    }
}
export default Invite;