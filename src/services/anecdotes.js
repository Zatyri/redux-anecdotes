import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'



const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const post = async (anecdote) => {
  const request = await axios.post(baseUrl, anecdote)
  return request.data
}

const update = async (id, vote) => {
  const response = await axios.patch(`${baseUrl}/${id}`, {votes: vote +1 })  
  return response.data
}

export default { getAll, post, update }