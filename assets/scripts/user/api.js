'use strict'

const config = require('../config.js')
const store = require('../store.js')

const create = function (data) {
  return $.ajax({
    url: config.apiUrl + '/users/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiUrl + '/users/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteProfile = () => {
  console.log('delete profile', store.user.token)
  return $.ajax({
    url: config.apiUrl + '/users/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  create,
  update,
  deleteProfile
}
