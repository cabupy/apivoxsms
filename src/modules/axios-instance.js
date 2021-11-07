const axios = require('axios')
const qs = require('qs')

const _APIURL =
  process.env.APIURL ?? `https://www.vox.com.py/smssenderrest/api/mensaje`
const _TOKEN = process.env.TOKEN ?? `put here an alternative token: Basic + base64`
const _TIMEOUT = process.env.TIMEOUT ?? 10000

const instanceAxios = axios.create({
  headers: { Authorization: _TOKEN },
  baseURL: _APIURL,
  timeout: _TIMEOUT
})

const sendPOST = async (url, data) => {
    try {
      const response = await instanceAxios({
        method: 'POST',
        url: url,
        data: qs.stringify(data),
      })
      return Promise.resolve(response.data ?? [])
    } catch (error) {
      return Promise.reject(error)
    }
  }

module.exports = {
    sendPOST
}