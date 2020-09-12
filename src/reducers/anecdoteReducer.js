



/* Not used in assignments 6.13 forward
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
*/
const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

// const initialState = anecdotesAtStart.map(asObject) ***** Not used in assignments 6.13 forward

export const initAnecdoteAction = (initalAnecdotes) => {
  
  return {    
    type: 'INIT_ANECDOTE',
    data: initalAnecdotes
  }
}

export const voteAction = (id) => {
  return {
    type: 'VOTE',
    data: {id}
  }
}

export const addAction = (newAnecdote) => {
  return {
    type: 'ADD',
    data: asObject(newAnecdote)
  }
}

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'INIT_ANECDOTE':   
      return action.data
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