var journal = require('./../js/journal.js').Journal;

var count = -1;

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    $('.journal-list ol').append('<li class="journal-item' + (count+1).toString() + '"></li>');
    count + 1;
    $('.journal-list ol li:last-child').text(title);
    $('#journalTitle').text(title);
    $('#journalBody').text(body);
  });
});
