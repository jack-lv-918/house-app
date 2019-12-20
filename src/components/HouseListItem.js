import React, { Component } from 'react'
import {Flex} from 'antd-mobile';
import PropTypes from 'prop-types';

//房产列表公共组件
export default class HouseListItem extends Component {
    //约束属性类型
    static propTypes = {
        item:PropTypes.object,
    }
    //设置默认值
    static defaultProps = {
        item:{}
    }
    clickTest = ()=>{
        this.props.cb('来自于子组件的数据');
    };
    render() {
        const {item} = this.props; 
        return (
            <Flex onClick={this.clickTest} style={{ backgroundColor: '#fff', marginBottom: 10 }}>
                <img style={{ width: 100, height: 100, marginRight: 10 }} src={item.pic} />
                <div style={{ flex: 1, paddingRight: 10 }}>
                    <div style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</div>
                    <Flex justify="between" style={{ margin: '10px 0' }}>
                        <div>{item.address}</div>
                        <div style={{ color: 'red' }}>{item.price}/平米</div>
                    </Flex>
                </div>
            </Flex>
        )
    }
}
