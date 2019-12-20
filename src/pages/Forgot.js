import React, { Component } from 'react'


function test() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ a: 1 });
        }, 1000);
    });
}
test()
    .then((res) => {
        console.log('res', res)
    })
    .catch((err)=>{
        console.log('err',err)
    })

export default class Forgot extends Component {
    render() {

        return (
            <div>
                忘记密码
            </div>
        )
    }
}
