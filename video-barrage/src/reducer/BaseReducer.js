//注意，这里不需要再import action了。
//定义一个初始化状态的state，假设现在有一个空数组testData
let initState = {
    testData: []
}

//定义一个叫做test的reducer，更新state。
export function test(state = initState, action) {
    switch (action.type) {
        case 'SAVE_REDUCER':
            return {
                ...state,
                testData: action.data
            }

        default:
            return state;
    }
}