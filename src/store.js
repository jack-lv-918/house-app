import {
    createStore
} from 'redux'
export default createStore(reducer);

//reducer:计算者
function reducer(state = {
    historyList: []
}, action) {
    switch (action.type) {
        case 'addHistory':
            //去重
            const {
                historyList
            } = state;
            for (let i = 0; i < historyList.length; i++) {
                if (historyList[i].id === action.item.id) {
                    historyList.splice(i, 1);
                }
            }

            return {
                ...state, //复制老的数据,
                historyList: [action.item, ...state.historyList]
            }
            default:
                return state;
    }
}

/**
 * action创建函数
 * 
 */
export const addHistory = (item) => {
    return {
        type: 'addHistory',
        item,
    }
}