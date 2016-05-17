var gulp = require('gulp');
var concat = require('gulp-concat');
var request = require('request');
var cheerio = require('cheerio');
var File = require('vinyl');
var through = require('through2');
var gutil = require('gulp-util');
var beautify = require('gulp-beautify')


var url = "http://slither.io"

var html = "";
request(url,function(e,r,b){
html = b;
gulp.src('beautifysrc.js').pipe(yo()).pipe(concat('all.js')).pipe(beautify()).pipe(gulp.dest(''))
});

var getScripts = function(html,cb){
	var $ = cheerio.load(html);
	var list = {
		src:[],
		cont:[]
	};
	$('script').each(function(){
		if($(this).attr('src')){
			list['src'].push($(this).attr('src'));
		}
		else {
			list['cont'].push($(this).html());
		}

	});
	cb(list);
}

function yo(){
	return through.obj(function(file,enc,cb){
    var that = this;
		getScripts(html,function(list){
		var count = list['cont'].length+list['src'].length;
		for(var x in list['src']){
			request(url+list['src'][x],function(error,response,body){
        if(error)
          console.log(error);
        else {
        console.log(url+list['src'][x])
				var coffeeFile = new File({
  					cwd: "/",
  					base: "/",
  					path: "/"+list['src'][x],
  					contents: new Buffer(body)
				});
				that.push(coffeeFile);
        --count||cb();
      }
			});

		}
		for(var y in list['cont']){
			var coffeeFile = new File({
  				cwd: "/",
  				base: "/",
  				path: "/"+count+".js",
  				contents: new Buffer(list['cont'][y])
			});
			that.push(coffeeFile);
			--count||cb();
		}
		});
	});
}
