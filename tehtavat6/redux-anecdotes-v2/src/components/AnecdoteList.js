import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { voteAnecdote } from './../reducers/anecdoteReducer'
import { setNotification } from './../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

class AnecdoteList extends React.Component {
  handleVote = async (id, anecdote) => {
    console.log('Anecdote', anecdote.content)
    //const voted = await anecdoteService.addVote(id, anecdote)
    this.props.voteAnecdote(id, anecdote)
    this.props.setNotification('you voted: ' + anecdote.content + '', 5000)

    /**setTimeout(() => {
      this.props.setNotification('')
    }, 5000);**/

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
                this.handleVote(anecdote.id, anecdote)
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
