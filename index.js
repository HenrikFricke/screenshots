var env = require('node-env-file')
var fs = require('fs')
var webshot = require('webshot')

var json = JSON.parse(fs.readFileSync('websites.json'))

env(__dirname + '/.env')

var options = {
  windowSize: {
    width: process.env.WINDOW_WIDTH || 1280,
    height: process.env.WINDOW_HEIGHT || 800
  },
  shotSize: {
    width: process.env.SHOT_WIDTH || 'all',
    height: process.env.SHOT_HEIGHT || 'all'
  }
}

json.websites.forEach(function (page) {
  webshot(page, 'screenshots/' + page + '.jpg', options, function(err) {
    if (err) {
      console.log(err)
    }
  })
})
