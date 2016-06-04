var url = 'mongodb://localhost:27017/dungeon';
var mongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var getLevels = function(req, res)
{
	mongoClient.connect(url, function(err, db) {
		findLevels(db, req.params.id, function(levels){
			res.send(JSON.stringify(levels[0]));
		});
	});
};
 
var findLevels = function(db, id, callback) {
  // Get the documents collection 
  var collection = db.collection('levels');
  // Find some documents 
  collection.find({"levelId": id}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.dir(docs);
    callback(docs);
  });
}

exports.getLevels = getLevels;