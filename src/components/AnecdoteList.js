import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAction } from '../reducers/anecdoteReducer'
import {showVoteAction} from '../reducers/notificationReducer'

const AnecdoteList = () => {

    const filteredAnecdotes = useSelector(state => {
        const anecdotes = state.anecdotes
        const filter = state.filter.toLowerCase()
        if(filter === ''){
            return state.anecdotes
        }
        
        return  anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter)
            )
        
    })

    const dispatch = useDispatch()
  
    const vote = (id, content) => {
      console.log('vote', id)
      console.log('content', content);      
      dispatch(voteAction(id))
      dispatch(showVoteAction(content))   
      setTimeout(() => {
        dispatch(showVoteAction('initial'))  
      }, 5000)
    }

    
   
    return (
        <div>
            {filteredAnecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
                </div>
    </div>
  )}
        </div>
    )
}

export default AnecdoteList



