exports.Journal = function(title, body){
  this.title = title;
  this.body  = body;
}

Journal.prototype.wordCount = function() {
  var bodySplit =  this.body.split(" ");
  return bodySplit.length();
}