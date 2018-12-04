'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onCreateProfile = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  data.user.email = store.user.email
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onFailure)
}

const onUpdateProfile = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  data.user.email = store.user.email
  api.update(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onFailure)
}

const onDeleteProfile = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  // data.user.email = store.user.email
  api.deleteProfile()
    .then(function () { store.user = {} })
    .catch(ui.onFailure)
}

module.exports = {
  onCreateProfile,
  onUpdateProfile,
  onDeleteProfile
}
