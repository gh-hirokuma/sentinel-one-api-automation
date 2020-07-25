import { getAllSites, getSite } from './lib/sites'
import { getAllThreats, getThreat } from './lib/threats'
import { getAllAgents, getAgentById, getAgent } from './lib/agents'
import { broadcastMessage } from './lib/agent_actions'

import axios from 'axios'
import { ENDPOINT, API_TOKEN } from './constants/connection'
;(async () => {
  // const threats = await getAllThreats(await getThreat())
  // const shortThreats = threats
  //   .map((threat: any) => {
  //     const { agentId, siteId, siteName } = threat
  //     return {
  //       agentId,
  //       siteId,
  //       siteName,
  //     }
  //   })
  //   .filter((v1: any, i1: any, a1: any) => {
  //     return (
  //       a1.findIndex((v2: any) => {
  //         return v1.agentId === v2.agentId
  //       }) === i1
  //     )
  //   })
  // for (let threat of shortThreats) {
  //   const theAgent: any = await getAgentById(threat.agentId)
  //   const [agent] = theAgent.data.data
  //   if (agent.computerName === 'DESKTOP-UNAEKIU') {
  //     await broadcastMessage('脅威が見つかりました！お気をつけください', {
  //       siteIds: agent.siteId,
  //       computerName: agent.computerName,
  //     })
  //   }
  // }

  await axios
    .post(
      'https://apne1-1101-nfr.sentinelone.net/web/api/v2.0/sites?apiToken=I2bZm1WXHFeRYwDAK6qS6vll6DJqnLU5ZxtpKTPme9nGpDUu1zRLMsIlXYBEBGcrK8adb1tm7KHkh8Dw',
      {
        data: {
          name: 'test2',
          totalLicenses: 10,
          siteType: 'Trial',
          sku: 'Complete',
          suite: 'Complete',
          accountId: '829390405081046196',
        },
      }
    )
    .then(res => console.log(res))
    .catch(err => console.log(err.response.data.errors))
})()
