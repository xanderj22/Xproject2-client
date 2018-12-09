'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onLikesSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCreateLikesSuccess)
    .catch(ui.onFailure)
}

// const onShowUserLikes = function (event) {
//   event.preventDefault()
//   // const data = getFormFields(event.target)
//   // data.user.email = store.user.email
//   api.showUserLikes()
//     .then(ui.onShowUserLikesSuccess)
//     .catch(ui.onFailure)
// }

module.exports = {
  onLikesSubmit
  // onShowUserLikes
}
