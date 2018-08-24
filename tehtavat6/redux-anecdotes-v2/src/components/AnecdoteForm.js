import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { anecdoteCreation } from './../reducers/anecdoteReducer'
import { setNotification } from './../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

class AnecdoteForm extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    //const newAnecdote = await anecdoteService.postAnecdote(content)
    this.props.anecdoteCreation(content)
    this.props.setNotification('Added ' + content + '',5000)
    /**setTimeout(() => {
      this.props.setNotification('')
    }, 5000);**/

  }
   render() {
     return (
       <div>
      <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button> 
        </form>
      </div>
     )
   }
}



const mapDispatchToProps = {
  anecdoteCreation, setNotification
}


const ConnectedAnecdoteForm = connect(
  null, mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm
