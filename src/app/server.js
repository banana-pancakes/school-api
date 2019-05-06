const Hapi = require('@hapi/hapi')
const argv = require('minimist')(process.argv.slice(2))

exports.init = async () => {
  const server = Hapi.server({
    port: 5000,
    routes: { cors: !!argv.hasOwnProperty('local') }
  })

  require('./router').forEach((route) => { server.route(route) })

  return server
}
