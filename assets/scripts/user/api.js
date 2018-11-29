'use strict'

const config = require('../config.js')
const store = require('../store.js')

const create = function (data) {
  return $.ajax({
    url: config.apiUrl + '/users',
    method: 'POST',
    data
  })
}

module.exports = {
  create
}
