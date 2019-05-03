const log = require('../../utils/beauty-logs')

module.exports = [
  {
    method: 'GET',
    path: '/test/{id?}',
    handler: async (request, h) => {
      const id = request.params.id ? request.params.id : null
      try {
        return id
      } catch (ex) {
        log.error(ex)
        return 500
      }
    }
  }
]
