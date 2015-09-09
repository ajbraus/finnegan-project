$(document).ready(function () { 
  $('.sentence').click(function() {
    console.log("selecting sentence")
    var sentence = $(this).text();
    $("#sentence").text(sentence);
    // socket.emit('my other event', { my: 'data' });
  })

  $("#sentence-form").submit(function (e) {
    e.preventDefault();
    console.log('blah')
    $.post('/sentences', { sentence: $('#sentence').text() },
      function (data) {
        console.log(data);
      },
      function (data) {
        console.log(data);
      })
  }) 
})