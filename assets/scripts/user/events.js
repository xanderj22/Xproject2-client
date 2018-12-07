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
    .then(ui.onCreateProfileSuccess)
    .catch(ui.onFailure)
}

const onUpdateProfile = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  data.user.email = store.user.email
  api.update(data)
    .then(ui.onUpdateProfileSuccess)
    .catch(ui.onFailure)
}

const onShowUserInfo = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  // data.user.email = store.user.email
  api.showUserInfo()
    .then(ui.onShowUserInfoSuccess)
    .catch(ui.onFailure)
}

const onDeleteProfile = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  // data.user.email = store.user.email
  api.deleteProfile()
    .then(function () { store.user = {} })
    .then(ui.onDeleteProfileSuccess)
    .catch(ui.onFailure)
}

module.exports = {
  onCreateProfile,
  onUpdateProfile,
  onShowUserInfo,
  onDeleteProfile
}
