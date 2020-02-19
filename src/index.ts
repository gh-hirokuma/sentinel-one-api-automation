// import { getAllSites, getSite } from './lib/sites'
import { getAllThreats, getThreat } from './lib/threats'
;(async () => {
  //   const sites = await getAllSites(await getSite())
  const threats = await getAllThreats(await getThreat())

  // sites.forEach(site => {
  //   console.log(site);
  // });

  console.log(threats)

  // threats.forEach(threat => {
  //   console.log(threat);
  // });
})()
