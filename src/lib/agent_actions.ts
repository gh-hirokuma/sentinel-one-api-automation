import axios from 'axios'
import { ENDPOINT, API_TOKEN } from '../constants/connection'

const broadcastMessage = async (message: string, params: any) => {
  const options = { apiToken: API_TOKEN, limit: 10 }

  return axios
    .post(
      `${ENDPOINT}/web/api/v2.0/agents/actions/broadcast?apiToken=${API_TOKEN}`,
      {
        data: { message },
        filter: {
          siteIds: params.siteId,
          computerName: params.computerName,
        },
      }
    )
    .then(res => {
      console.log(`${res.status} ${res.statusText}`)
    })
    .catch(({ response }) => {
      console.log(response.data.errors)
    })
}

export { broadcastMessage }
