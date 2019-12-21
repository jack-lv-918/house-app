import React, { Component } from 'react'
import {connect} from 'react-redux'
import HouseListItem from '../../components/HouseListItem';

class History extends Component {
    render() {
        console.log('history-this',this)
        return (
            <div>
               {
                   this.props.historyList.map((item,key)=>{
                       return(
                          <HouseListItem item={item} key={item.id}/> 
                       )
                   })
               }
            </div>
        )
    }
}

//参数一：state表示整个store中的所有数据
const mapStateToProps = (state)=>{
    return{
        historyList:state.historyList
    }
}

export default connect(mapStateToProps)(History);
