'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events.js')
// const userEvents = require('./user/events.js')
const userEvents = require('./user/events.js')
const likesEvents = require('./likes/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-profile-form').on('submit', userEvents.onCreateProfile)
  // $('#update-profile-form').on('submit', userEvents.onUpdateProfile)
  $('#delete-profile').on('submit', userEvents.onDeleteProfile)
  $('#likes-form').on('submit', likesEvents.onLikesSubmit)
  $('#show-user-info').on('submit', userEvents.onShowUserInfo)

  $('#change-password').hide()
  $('#sign-out').hide()
  // $('#show-user-likes').on('submit', likesEvents.onShowUserLikes)
})

// $('#update-user').on('click', userEvents.onUpdateUserClick)
// $('#show-user-info').on('click', userEvents.onShowUserInfoClick)
// $('#delete-user').on('click', userEvents.onDeleteUserClick)
