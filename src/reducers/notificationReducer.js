const initialMessage = 'Welcome to my anecdote site'


const reducer = ((state = initialMessage, action) => {
    switch(action.type){
        case 'SHOWVOTE':         
            return action.data
        case 'DEFAULT':
            return initialMessage
        default:
            return state
    }
})

export const showVoteAction = (content) => {
    if(content === 'initial'){
        return {
            type: 'DEFAULT'
        }
    }  
    return {
        type: 'SHOWVOTE',
        data: content
    }
}


export default reducer