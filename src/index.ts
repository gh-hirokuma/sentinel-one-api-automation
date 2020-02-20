import { getAllSites, getSite } from './lib/sites'
import { getAllThreats, getThreat } from './lib/threats'
import { getAllAgents, getAgentById, getAgent } from './lib/agents'
import { broadcastMessage } from './lib/agent_actions'
;(async () => {
  const threats = await getAllThreats(await getThreat())

  const shortThreats = threats
    .map((threat: any) => {
      const { agentId, siteId, siteName } = threat

      return {
        agentId,
        siteId,
        siteName,
      }
    })
    .filter((v1: any, i1: any, a1: any) => {
      return (
        a1.findIndex((v2: any) => {
          return v1.agentId === v2.agentId
        }) === i1
      )
    })

  for (let threat of shortThreats) {
    const theAgent: any = await getAgentById(threat.agentId)
    const [agent] = theAgent.data.data

    if (agent.computerName === 'DESKTOP-UNAEKIU') {
      await broadcastMessage('脅威が見つかりました！お気をつけください', {
        siteIds: agent.siteId,
        computerName: agent.computerName,
      })
    }
  }
})()
