'use strict'

const store = require('../store.js')

const onCreateLikesSuccess = function () {
  $('#message').html('Thanks for sharing!')
  // reset form
  $('#likes-form').trigger('reset')
  $('#userinterests').val('')
  $('#userfaves').val('')
  $('#personalities').val('')
  $('#genderprefs').val('')
  $('#usersearch').val('')
}

const onFailure = function (response) {
  // log the error
  console.error(response)

  // display error to user
  $('#message').html('Something went wrong, please try again.')
}

module.exports = {
  onCreateLikesSuccess,
  onFailure
}
