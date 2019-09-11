const middleware = {}

middleware['column'] = require('..\\middleware\\column.js');
middleware['column'] = middleware['column'].default || middleware['column']

export default middleware
