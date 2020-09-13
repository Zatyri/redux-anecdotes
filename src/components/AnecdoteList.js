import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAction, initAnecdoteAction } from '../reducers/anecdoteReducer'
import {notificationAction} from '../reducers/notificationReducer'


const AnecdoteList = () => {
    const dispatch = useDispatch() 
    useEffect(() => {
        dispatch(initAnecdoteAction())
    }, [dispatch])
    
    const filteredAnecdotes = useSelector((state) => {         
        const anecdotes = state.anecdotes                
        const filter = state.filter.toLowerCase()
        if(filter === ''){
            return state.anecdotes
        }        
        return  anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter))
    })
    

    const vote = (id, content, votes) => {  
      dispatch(voteAction(id, votes))
      dispatch(notificationAction(`You voted: ${content}`, 5))      
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
                    <button onClick={() => vote(anecdote.id, anecdote.content, anecdote.votes)}>vote</button>
                </div>
    </div>
  )}
        </div>
    )
}

export default AnecdoteList



