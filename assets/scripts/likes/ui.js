'use strict'

const store = require('../store.js')

const onCreateLikesSuccess = function () {
  $('#content').html('Thanks for sharing!')
  // reset form
  $('#likes-form').trigger('reset')
}

const onFailure = function (response) {
  // log the error
  console.error(response)

  // display error to user
  $('#content').html('Something went wrong, please try again.')
}

module.exports = {
  onCreateLikesSuccess,
  onFailure
}
