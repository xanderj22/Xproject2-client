'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events.js')
// const userEvents = require('./user/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
})

// $('#create-user').on('click', userEvents.onCreateUserClick)
// $('#update-user').on('click', userEvents.onUpdateUserClick)
// $('#user-info').on('click', userEvents.onUserInfoClick)
// $('#delete-user').on('click', userEvents.onDeleteUserClick)
