import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAction, initAnecdoteAction } from '../reducers/anecdoteReducer'
import {showVoteAction} from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'


const AnecdoteList = () => {
    const dispatch = useDispatch()

    const anecdotes = async () => {
        const initialAnecdotes = await anecdoteService.getAll()
        dispatch(initAnecdoteAction(initialAnecdotes))
    }

    useEffect(() => {
        anecdotes() 
    }, [])




    const filteredAnecdotes = useSelector((state) => {
         
        const anecdotes = state.anecdotes                
        const filter = state.filter.toLowerCase()
        if(filter === ''){
            return state.anecdotes
        }        
        return  anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter))
        
    })

    const vote = (id, content, votes) => {
      console.log('vote', id)
      console.log('content', content); 
      anecdoteService.update(id, votes)    
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
                    <button onClick={() => vote(anecdote.id, anecdote.content, anecdote.votes)}>vote</button>
                </div>
    </div>
  )}
        </div>
    )
}

export default AnecdoteList



