'use strict'

const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('I LIKE YOU !!')
  $('#message').removeClass()
  $('#message').addClass('success-signup')
  $('#signupemail').val('')
  $('#signuppassword').val('')
  $('#signuppasswordconfirm').val('')
  // console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = error => {
  $('#message').text('Nope. Try again :/')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = data => {
  store.user = data.user
  console.log(store.user)
  console.log(data)
  $('#message').text('Signed in successfully')
  setTimeout(clearText, 2800)
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#signinemail').val('')
  $('#signinpassword').val('')
  $('#signinpasswordconfirm').val('')
  $('#change-password').show()
  $('#sign-out').show()
  $('.user').css('display', 'grid')
  $('#user-profile-info').html('Hello!')
  $('.delete-user').css('display', 'grid')
  // console.log('signInSuccess ran. Data is :', data)
}

const signInFailure = error => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  $('#message').text('Password changed successfully')
  setTimeout(clearText, 2800)
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#oldpass').val('')
  $('#newpass').val('')
  // console.log('changePasswordSuccess ran. Data is :', data)
}

const changePasswordFailure = error => {
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  $('#message').text('Success on sign out')
  store.user = null
  $('#message').removeClass()
  $('#message').addClass('success')
  setTimeout(clearText, 2800)
  // console.log('signOutSuccess ran. Data is :', data)
}

const signOutFailure = error => {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
}

const clearText = function () {
  document.getElementById('message').textContent = ''
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
