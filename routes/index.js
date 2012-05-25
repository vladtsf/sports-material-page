
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.blogEntry = function(req, res){

	console.time('render')
	res.render('blog-entry', require('../jsons/blog-entry.json'));
};