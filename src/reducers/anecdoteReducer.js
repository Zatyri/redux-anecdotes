import anecdoteService from '../services/anecdotes'

export const initAnecdoteAction = () => {  
  return async dispatch => { 
    const anecdotes = await anecdoteService.getAll()   
    dispatch({type: 'INIT_ANECDOTE',
    data: anecdotes
    })
  }
}

export const voteAction = (id, votes) => {
  return async dispatch => {
    await anecdoteService.update(id, votes)
    dispatch({
      type: 'VOTE',
      data: {id}
    })
  }
}

export const addAction = (newAnecdote) => {
  return async dispatch => {
    await anecdoteService.post(newAnecdote)
    dispatch({
      type: 'ADD',
      data: newAnecdote
    })
  }
}

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'INIT_ANECDOTE':

      return action.data.sort((a,b) => (a.votes < b.votes)?1:((b.votes < a.votes)?-1:0))
    case 'VOTE':
      const id = action.data.id
      const anecdoteToVote = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }
      const newState = state.map(anecdote => 
        anecdote.id !== id ? anecdote : changedAnecdote
      )
      return newState.sort((a,b) => (a.votes < b.votes)?1:((b.votes < a.votes)?-1:0))
    case 'ADD':      
      return [...state, action.data]
    default:
      return state
  }  
}



export default reducer