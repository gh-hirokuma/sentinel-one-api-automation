import axios from 'axios'
import { ENDPOINT, API_TOKEN } from '../constants/connection'

const getSite = async (nextCursor?: string) => {
  const options = nextCursor
    ? { apiToken: API_TOKEN, limit: 10, cursor: nextCursor }
    : { apiToken: API_TOKEN, limit: 10 }

  try {
    return axios
      .get(`${ENDPOINT}/web/api/v2.0/sites`, {
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

const getAllSites = async ({
  data: {
    data: { sites },
    pagination: { nextCursor },
  },
}: any): Promise<any> => {
  if (!nextCursor) return sites
  return sites.concat(await getAllSites(await getSite(nextCursor)))
}

export { getSite, getAllSites }
