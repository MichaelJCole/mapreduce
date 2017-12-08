use wikipedia

// Describe it
mapFun = function() {
  if (this.page_title && this.page_title.replace) {
    var noPunctuation = this.page_title.replace(/[^\w]/g, "_");
    var words = noPunctuation.split("_");

    words.forEach(function(word) { 
      if(word) emit(word.toLowerCase(),1); 
    });
  }
};
reduceFun = function(someKey, someValues) {
  return Array.sum(someValues);
};  // Why is this Array.sum() instead of someValues.length?

// Do it.
db.titles.mapReduce(mapFun, reduceFun, { out: {replace:"wordCounts"} });

// Trim the result document set
db.wordCounts.remove({value: {$lt:50}});