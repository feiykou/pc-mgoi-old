const middleware = {}

middleware['column'] = require('..\\middleware\\column.js');
middleware['column'] = middleware['column'].default || middleware['column']

middleware['nav'] = require('..\\middleware\\nav.js');
middleware['nav'] = middleware['nav'].default || middleware['nav']

export default middleware
