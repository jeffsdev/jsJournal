(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Journal(title, body){
  this.title = title;
  this.body  = body;
};

Journal.prototype.wordCount = function() {
  var bodySplit =  this.body.split(" ");
  return bodySplit.length;
};

exports.Journal = Journal;

},{}],2:[function(require,module,exports){


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

},{"./../js/journal.js":1}]},{},[2]);
