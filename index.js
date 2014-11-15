/*
* This is Official API Note, use mongojs!  
*/
var mongojs = require('mongojs');

var db = mongojs('test',['table']); //db -> 'test', collections -> 'table'

/**
* Search Data (FindOne)
* @class 
*/
db.table.findOne({
		query: { name: 'Mac' }
	},function(err,doc){
		console.log(doc);
});

/**
* New save Data
* @class 
*/
db.table.save({ name : "Mac"})

/**
* Remove data
* @class 
*/
db.table.remove({name:'Mac'})

/**
* Modify Update Data
* @class 
*/
db.table.update({
		name:'Eric'
	}, {$inc:{name:'Mac'}}, {multi:true}, function() {
    // the update is complete
});

/**
* Add a new data insert in data
*/
db.table.findAndModify({
    query: { name: 'Eric' },
    update: { $set: { name:'Mac' } },
    new: true
}, function(err, doc, lastErrorObject) {
    // doc.tag === 'maintainer'
});
/**
 * GOD MODE
 */
 db.table.drop();
