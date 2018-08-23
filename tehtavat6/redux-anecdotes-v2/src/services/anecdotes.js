import axios from 'axios'

const getId = () => (100000*Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const getAll = async () => {
  const response = await axios.get('http://localhost:3001/anecdotes')
  return response.data
}

const postAnecdote = async (anecdote) => {
  const response = await axios.post('http://localhost:3001/anecdotes', asObject(anecdote))
  return response.data
}

const addVote = (id, anecdote) => {
  const votes = anecdote.votes + 1
  const modifiedAnecdote = {...anecdote, votes: votes }
  return axios.put(`http://localhost:3001/anecdotes/${id}`, modifiedAnecdote)
}

export default { getAll, postAnecdote, addVote }