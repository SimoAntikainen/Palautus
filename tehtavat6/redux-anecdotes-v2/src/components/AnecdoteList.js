import React from 'react'
import { voteAnecdote } from './../reducers/anecdoteReducer'
import { setNotification } from './../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  handleVote = (id, anecdote) => {
    this.props.store.dispatch(voteAnecdote(id))
    this.props.store.dispatch(setNotification('you voted: ' + anecdote + ''))

    setTimeout(() => {
      this.props.store.dispatch(setNotification(''))
    }, 10000);

  }
  render() {
    const anecdotes = this.props.store.getState().anecdotes.filter(
      anecdote => anecdote.content.toLowerCase().includes(this.props.store.getState().filter.toLowerCase()))
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => 
                this.handleVote(anecdote.id, anecdote.content)
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
