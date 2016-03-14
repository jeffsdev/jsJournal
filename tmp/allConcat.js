var journal = require('./../js/journal.js').Journal;

$(document).ready(function(){
  $('#signUp').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    $('#journalTitle').append(title);
    $('#journalBody').append(body);
  });
});
