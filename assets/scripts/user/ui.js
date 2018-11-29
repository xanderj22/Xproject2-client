'use strict'

const store = require('../store.js')

const onCreateProfileSuccess = function () {
  $('#content').html('Welcome Friend!')
  // reset form
  $('#create-profile-form').trigger('reset')
}

const onFailure = function (response) {
  // log the error
  console.error(response)

  // display error to user
  $('#content').html('Something went wrong, please try again.')
}

module.exports = {
  onCreateProfileSuccess,
  onFailure
}
