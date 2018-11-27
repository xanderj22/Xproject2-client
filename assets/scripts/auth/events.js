'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // take this data and send it to  our server
  // using an HTTP request (POST)
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
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  // event.preventDefault()
  $('#message').text('You are signed out!')
  api.signOut()
  // .then(ui.signOutSuccess)
  // .catch(ui.signOutFailure)
  $('.grid-container').css('display', 'none')
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut

}
