import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Flex, List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile'
import axios from 'axios';

export default class Login extends Component {
    state = {
        phone: '',
        pwd: ''
    }
    phoneChange = (val)=>{
        console.log('val',val)
        this.setState({phone:val});
    }
    pwdChange = (val)=>{
        this.setState({pwd:val});
    }
    login = ()=>{
        //获取表单值，并提交后台
        const {phone,pwd} = this.state;
       
    }
    render() {
        const { phone, pwd } = this.state;
        return (
            <div style={{ background: '#fff', position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}>
                {/* <div style={{display:'flex',justifyContent:'center'}}>
                   <img src={require('../assets/imgs/logo.png')} style={{width:100,height:100}}/>
               </div> */}
                <Flex justify="center">
                    <img src={require('../assets/imgs/logo.png')} style={{ width: 100, height: 100 }} />
                </Flex>


                <WingBlank size="md">
                    <WhiteSpace size="xl" />
                    <WhiteSpace size="xl" />
                    <List>
                        <InputItem
                            value={phone}
                            onChange={this.phoneChange}
                            placeholder="输入手机号">
                            <div style={{ backgroundImage: `url(${require('../assets/imgs/phone.png')})`, backgroundSize: 'cover', height: '25px', width: '25px' }} />
                        </InputItem>
                        <InputItem
                            value={pwd}
                            onChange={this.pwdChange}
                            placeholder="输入密码">
                            <div style={{ backgroundImage: `url(${require('../assets/imgs/pwd.png')})`, backgroundSize: 'cover', height: '25px', width: '25px' }} />
                        </InputItem>
                    </List>
                    <WhiteSpace size="xl" />
                    <Button style={{ background: 'green', color: '#fff' }} onClick={this.login}>登录</Button>
                    <WhiteSpace size="md" />
                    <Flex justify="between">
                        <Link to="/reg" style={{ color: 'green' }}>手机快速注册</Link>
                        <Link to="/forgot" style={{ color: 'green' }}>忘记密码</Link>
                    </Flex>
                </WingBlank>


            </div>
        )
    }
}
