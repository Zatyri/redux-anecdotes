

const reducer = ((state = '', action)  => {    
    switch(action.type){
        case 'FILTER':
            return action.data
        default:
            return state
    }
})

export const filterAction = (content) => {   
    return {
        type: 'FILTER',
        data: content
    }

}

export default reducer

