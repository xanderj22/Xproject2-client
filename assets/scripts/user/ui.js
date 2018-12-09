'use strict'

// const store = require('../store.js')

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

const onShowUserInfoSuccess = function (data) {
  // console.log(data)
  const template = `<table style="width:100%">
    <tr>
      <th>   User Name     </th>
      <th>    Location     </th>
      <th>    About You    </th>
      <th> Gender Identity </th>
      <th>Preferred Pronoun</th>
    </tr>
    <tr>
      <td>${data.user.User_Name}</td>
      <td>${data.user.Location}</td>
      <td>${data.user.About}</td>
      <td>${data.user.Gender_Identity}</td>
      <td>${data.user.Preferred_Pronoun}</td>
    </tr>
  </table>`

  $('#user-profile-info').html(template)
  $('#message').html('Current Profile')
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
