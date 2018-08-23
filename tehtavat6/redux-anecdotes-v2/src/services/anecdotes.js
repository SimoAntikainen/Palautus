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

export default { getAll, postAnecdote }