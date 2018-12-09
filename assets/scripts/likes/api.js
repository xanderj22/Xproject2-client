'use strict'

const config = require('../config.js')
const store = require('../store.js')

const create = function (data) {
  return $.ajax({
    url: config.apiUrl + '/likes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// const showUserLikes = () => {
//   console.log('show info', store.user.token)
//   return $.ajax({
//     url: config.apiUrl + '/users/' + store.user.id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  create
  // showUserLikes
}
