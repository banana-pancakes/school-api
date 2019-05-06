const log = require('../../utils/beauty-logs')
const students = require('../../dataset/students.json')
const teachers = require('../../dataset/teachers.json')
const error = {
  statusCode: 500,
  message: 'Internal server error.'
}

module.exports = [
  {
    method: 'GET',
    path: '/students',
    handler: async (request, h) => {
      try {
        return students
      } catch (ex) {
        log.error(ex)
        return error
      }
    }
  },

  {
    method: 'GET',
    path: '/teachers',
    handler: async (request, h) => {
      try {
        return teachers
      } catch (ex) {
        log.error(ex)
        return error
      }
    }
  }
]
