var Journal = require('./../js/journal.js').Journal;
console.log(Journal)
var count = 0;
var jTitle;
var jBody;
var newEntry;

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    jTitle = $('#title').val();
    jBody = $('#body').val();
    newEntry = new Journal(jTitle, jBody);
    $('.journal-list ol').append('<li class="journal-item' + (count+1).toString() + '"></li>');
    count + 1;
    $('.journal-list ol li:last-child').text(jTitle);
    $('#journalTitle').text(jTitle);
    $('#journalBody').text(jBody);
    $('#wordCount').append(newEntry.wordCount());
  });
});
