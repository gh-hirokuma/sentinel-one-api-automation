require('dotenv').config()

const ENDPOINT = 'https://apne1-1101-nfr.sentinelone.net'
const API_TOKEN = process.env.API_TOKEN

console.log(API_TOKEN)

export { ENDPOINT, API_TOKEN }
