import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAction } from '../reducers/anecdoteReducer'
import {showVoteAction} from '../reducers/notificationReducer'

const AnecdoteList = () => {

    const anecdotes = useSelector(state => state.anecdotes)
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
            {anecdotes.map(anecdote =>
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



