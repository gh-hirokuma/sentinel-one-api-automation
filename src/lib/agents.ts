import axios from 'axios'
import { ENDPOINT, API_TOKEN } from '../constants/connection'

const getAgent = async (nextCursor?: string) => {
  const options = nextCursor
    ? { apiToken: API_TOKEN, limit: 10, cursor: nextCursor }
    : { apiToken: API_TOKEN, limit: 10 }

  try {
    return axios
      .get(`${ENDPOINT}/web/api/v2.0/agents`, {
        params: options,
      })
      .then(res => {
        return res
      })
      .catch(err => {
        console.log(err.response.data.errors)
      })
  } catch (e) {
    console.log(e)
  }
}

const getAgentById = async (id: string) => {
  const options = { apiToken: API_TOKEN, limit: 10, ids: id }

  try {
    return axios
      .get(`${ENDPOINT}/web/api/v2.0/agents`, {
        params: options,
      })
      .then(res => {
        return res
      })
      .catch(err => {
        console.log(err.response.data.errors)
      })
  } catch (e) {
    console.log(e)
  }
}

const getAllAgents = async ({
  data: {
    data,
    pagination: { nextCursor },
  },
}: any): Promise<any> => {
  if (!nextCursor) return data
  return data.concat(await getAllAgents(await getAgent(nextCursor)))
}

export { getAgent, getAgentById, getAllAgents }
