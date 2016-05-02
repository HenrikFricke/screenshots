var fs = require('fs')
var webshot = require('webshot')

var json = JSON.parse(fs.readFileSync('websites.json'))

var options = {
  screenSize: {
    width: process.env.SCREEN_WIDTH || 1280,
    height: process.env.SCREEN_HEIGHT || 800
  },
  shotSize: {
    height: process.env.SHOT_HEIGHT || 'all',
    width: process.env.SHOT_WIDTH || 'all'
  }
}

json.websites.forEach(function (page) {
  webshot(page, 'screenshots/' + page + '.jpg', options, function(err) {
    if (err) {
      console.log(err)
    }
  })
})
