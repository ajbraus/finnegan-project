$(document).ready(function () { 
  $('.sentence').click(function() {
    console.log("selecting sentence")
    var sentence = $(this).text();
    $("#sentence-edit").text(sentence);
  })
})