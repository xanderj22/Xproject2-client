'use strict'

const store = require('../store.js')

const onCreateProfileSuccess = function () {
  $('#message').html('Welcome Friend!')
  // reset form
  $('#create-profile-form').trigger('reset')
  $('#username').val('')
  $('#userlocation').val('')
  $('#aboutuser').val('')
  $('#useridentity').val('')
  $('#userpronoun').val('')
}

const onUpdateProfileSuccess = function () {
  $('#message').html('Thanks for updating!')
  // reset form
  $('#update-profile-form').trigger('reset')
}

const onShowUserInfoSuccess = function () {
  $('#message').html('Thanks for sharing!')
  // reset form
  $('#show-user-info').trigger('reset')
}

const onDeleteProfileSuccess = function () {
  $('#message').html('Profile Deleted!')
  $('#delete-profile').trigger('reset')
}

const onFailure = function (response) {
  // log the error
  console.error(response)

  // display error to user
  $('#message').html('Something went wrong, please try again.')
}

module.exports = {
  onCreateProfileSuccess,
  onUpdateProfileSuccess,
  onShowUserInfoSuccess,
  onDeleteProfileSuccess,
  onFailure
}
