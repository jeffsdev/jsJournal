(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Journal = function(title, body){
  this.title = title;
  this.body  = body;
}

Journal.prototype.wordCount = function() {
  var bodySplit =  this.body.split(" ");
  return bodySplit.length();
}

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
