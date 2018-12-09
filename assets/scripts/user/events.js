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
  // $('.delete-user').css('display', 'grid')
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
  // $('.delete-user').css('display', 'grid')
}

const onDeleteProfile = function (event) {
  event.preventDefault()
  api.deleteProfile()
    .then(function () { store.user = {} })
    .then(ui.onDeleteProfileSuccess)
    .catch(ui.onFailure)
  $('#show-user-info').css('display', 'none')
  $('#user-profile-info').html('Goodbye')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#create-profile-form').css('display', 'none')
  $('#likes-form').css('display', 'none')
  $('#delete-profile').css('display', 'none')
}

module.exports = {
  onCreateProfile,
  onUpdateProfile,
  onShowUserInfo,
  onDeleteProfile
}
