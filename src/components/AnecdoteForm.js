import React from 'react'
import { addAction } from '../reducers/anecdoteReducer'
import {notificationAction} from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AddAnecdote = (props) => {    

    const getId = () => (100000 * Math.random()).toFixed(0)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('adding ' + event.target.anecdote);
        const newAnecdote = {
            content: event.target.anecdote.value,
            id: getId(),
            votes: 0
          }
        props.addAction(newAnecdote)
        props.notificationAction(`Added anecdote: ${event.target.anecdote.value}`, 5)
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

const mapDispatchToProps = {
    addAction,
    notificationAction
}

const mapStateToProps = (state) => {
    return state
}

const ConnectedAnecdoteForm = connect(mapStateToProps, mapDispatchToProps)(AddAnecdote)

export default ConnectedAnecdoteForm
