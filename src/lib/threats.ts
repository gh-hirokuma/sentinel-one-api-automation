import axios from 'axios'
import { ENDPOINT, API_TOKEN } from '../constants/connection'

const getThreat = async (nextCursor?: string) => {
  const options = nextCursor
    ? { apiToken: API_TOKEN, limit: 10, resolved: false, cursor: nextCursor }
    : { apiToken: API_TOKEN, limit: 10, resolved: false }

  try {
    return axios
      .get(`${ENDPOINT}/web/api/v2.0/threats`, {
        params: options,
      })
      .then(res => {
        return res
      })
      .catch(err => {
        console.log(err.data.errors)
      })
  } catch (e) {
    console.log(e)
  }
}

const getAllThreats = async ({
  data: {
    data,
    pagination: { nextCursor },
  },
}: any): Promise<any> => {
  if (!nextCursor) return data
  return data.concat(await getAllThreats(await getThreat(nextCursor)))
}

export { getThreat, getAllThreats }
