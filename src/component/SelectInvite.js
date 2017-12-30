import React, { Component } from "react";
import { DatePicker, Checkbox } from 'antd';
import Header from "./Header"
import Cascaders from "../component/Cascader"
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['运动', '吃饭', '电影', "K歌", "演出", "履行", "购物", "逛景区", "读书", "泡吧", "宠物", "拼车", "合租"];
const defaultCheckedList = [];
class SearchInvited extends Component {
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };
  onChangeBox = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
  }
  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }
  render() {
    return (
      <div>
        <div className="checkbox_style">
          <div style={{ borderBottom: '1px solid #E9E9E9', lineHeight: "30px" }}>
            <Checkbox
              indeterminate={this.state.indeterminate}
              onChange={this.onCheckAllChange}
              checked={this.state.checkAll}
            >
              所有主题
          </Checkbox>
          </div>
          <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChangeBox} />
        </div>
        <Cascaders />
      </div>
    )
  }
}

export default SearchInvited;