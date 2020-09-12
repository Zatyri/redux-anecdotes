import React from 'react'
import { addAction } from '../reducers/anecdoteReducer'
import {showVoteAction} from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import anecdoteService from '../services/anecdotes'

const AddAnecdote = () => {
    const dispatch = useDispatch()

    const getId = () => (100000 * Math.random()).toFixed(0)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('adding ' + event.target.anecdote);
        const newAnecdote = {
            content: event.target.anecdote.value,
            id: getId(),
            votes: 0
          }

        anecdoteService.post(newAnecdote)
        
        dispatch(addAction(newAnecdote))
        dispatch(showVoteAction(event.target.anecdote.value))
        event.target.anecdote.value = ''        
        setTimeout(() => {
            dispatch(showVoteAction('initial'))  
          }, 5000)

    }
    return (
        <>
            <h2>create new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div><input name='anecdote'/></div>
                <button>create</button>
            </form>
        </>
    )
}

export default AddAnecdote
