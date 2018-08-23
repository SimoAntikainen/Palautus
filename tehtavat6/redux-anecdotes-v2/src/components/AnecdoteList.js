import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { voteAnecdote } from './../reducers/anecdoteReducer'
import { setNotification } from './../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  handleVote = (id, anecdote) => {
    this.props.voteAnecdote(id)
    this.props.setNotification('you voted: ' + anecdote + '')

    setTimeout(() => {
      this.props.setNotification('')
    }, 10000);

  }
  render() {
    
    return (
      <div>
        <h2>Anecdotes</h2>
        {this.props.filteredAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
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

const filterAnecdotes = (anecdotes, filter) => {
  return anecdotes.filter(
    anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
}


const mapStateToProps = (state) => {
  return {
    filteredAnecdotes: filterAnecdotes(state.anecdotes,state.filter)
  }
}

const mapDispatchToProps = {
  voteAnecdote, setNotification
}


const ConnectedAnecdoteList = connect(
  mapStateToProps, mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList
