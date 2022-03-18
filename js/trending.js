function loadDoc() {
  var xhttp = new XMLHttpRequest()
  xhttp.open('GET', './json/trending.json', false)
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let o = JSON.parse(this.responseText)
      let scroller = ''
      for (let i = 0; i < o.length; i++) {
        scroller += '<div class="set">\
          <h1>' + o[i].column[0]['title'] + '</h1>\
          <div class="scroller" id="row' + i + '">\
          </div>\
          </div>'
      }
      document.getElementById('page').innerHTML = scroller

      function row(i) {
        let data = ''
        for (let j = 1; j < o[i].column.length; j++) {
          data += '<div class="box"><div class="image" style="height:' + o[i].column[0]['height'] + '"><img src="' + o[i].column[j]['img_path'] + '" alt="' + o[i].column[j]['item_no'] + '"></img></div><div class="d-box"><div class="type"><h4>' + o[i].column[j]['item_name'] + '</h4><span>' + o[i].column[j]['description'] + '</span></div><h4>₹ ' + o[i].column[j]['price'] + '</h4></div></div>'
        }
        document.getElementById('row' + i + '').innerHTML = data
      }
      for (let i = 0; i < o.length; i++) {
        row(i)
      }
    }
  }
  xhttp.send()
}
