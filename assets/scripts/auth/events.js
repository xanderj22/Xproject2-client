'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // take this data and send it to  our server
  // using an HTTP request (POST)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  // $('#change-password').show()
  // $('#sign-out').show()
  // $('.user').css('display', 'grid')
  // $('#user-profile-info').html('Hello!')
  // $('.delete-user').css('display', 'grid')
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  $('#message').text('You are signed out!')
  api.signOut()
    .then(function () { store.user = {} })
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#create-profile-form').css('display', 'none')
  $('#likes-form').css('display', 'none')
  $('#show-user-info').css('display', 'none')
  $('#delete-profile').css('display', 'none')
  $('#user-profile-info').html('Goodbye!')
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut

}
