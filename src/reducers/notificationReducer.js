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

export const notificationAction = (content, time) => {

    return dispatch => {
        dispatch({
            type: 'SHOWVOTE',
            data: content
        })
        setTimeout(() => {
            (dispatch(cleatNotificationAction()))
        }, time*1000)

    }
}

const cleatNotificationAction = () => {  
    return dispatch => {        
        dispatch({
        type: 'DEFAULT'
        })
    }
}


export default reducer