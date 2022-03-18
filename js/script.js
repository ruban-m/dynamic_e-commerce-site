function whatsapp() {
  window.location = ''
}
// slideshow
$(document).ready(function () {
  let shttp = new XMLHttpRequest()
  shttp.open('GET', './json/slide.json', false)
  shttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let s = JSON.parse(this.responseText)
      let img = ''
      for (let i = 0; i < s.length; i++) {
        img += '<img src="' + s[i]['path'] + '" alt="image"></img>'
      }
      document.getElementById('slideshow').innerHTML = img
    }
  }
  shttp.send()
})

// jQuery
$('#slideshow > img:gt(0)').hide()

setInterval(function () {
  $('#slideshow > img:first').fadeOut('slow').next().fadeIn('slow').end().appendTo('#slideshow')
}, 4000)
