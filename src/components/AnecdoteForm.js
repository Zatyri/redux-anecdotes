import React from 'react'
import { addAction } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const AddAnecdote = () => {
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('adding ' + event.target.anecdote);
        
        dispatch(addAction(event.target.anecdote.value))
        event.target.anecdote.value = ''

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
