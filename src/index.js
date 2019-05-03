const Server = require('./app/server')
const log = require('../utils/beauty-logs')
let server

async function start () {
  try {
    server = await Server.init()
    await server.start()
  } catch (err) {
    log.error(err)
    process.exit(1)
  }
  log.success(`Server running at: ${server.info.uri}`)
};

start()
