import React from 'react'
import { connect } from 'react-redux'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import { anecdoteInitialization } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotes'


class App extends React.Component {
  componentDidMount = async () => {
    const anecdotes = await anecdoteService.getAll()
    this.props.anecdoteInitialization(anecdotes)
  }

  render() {
    //const anecdotes = this.props.store.getState()
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Notification/>
        <Filter/>
        <AnecdoteList />
        <AnecdoteForm />
        
      </div>
    )
  }
}
/**
 * <Filter store={this.props.store}/>
 * <AnecdoteList store={this.props.store} />
        <AnecdoteForm store={this.props.store} />
 */
const mapDispatchToProps = {
  anecdoteInitialization
}



const ConnectedApp = connect(
  null, mapDispatchToProps
)(App)

export default ConnectedApp