import React, { Component } from "react"
import Divider from "antd/lib/divider";
import { Cascader, DatePicker } from 'antd';
const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }, {
            value: 'xiasha',
            label: 'Xia Sha',
            disabled: true,
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua men',
        }],
    }],
}];
const options2 = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou'
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing'
    }],
}];

class Cascaders extends Component {
    onChange(value, selectedOptions) {
        console.log(value, selectedOptions);
    }
    onChange2(value, selectedOptions) {
        console.log(value, selectedOptions);
    }
    onChangeDate(date, dateString) {
        console.log(date, dateString);
    }
    render() {
        return (
            <div>
                <Cascader
                    options={options}
                    onChange={this.onChange}
                    placeholder="请选择您的位置"
                    showSearch
                />
                <Cascader
                    options={options2}
                    onChange={this.onChange2}
                    placeholder="请选择目的地"
                    showSearch
                />
                <DatePicker placeholder="请选择约会时间" onChange={this.onChangeDate} />
            </div>
        )
    }
}
export default Cascaders;