$('#logout').click(function () {
  localStorage.clear()
  window.location = 'http://localhost:8080/index.html'
})