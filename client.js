var xhr = require('xhr')
var req = require('request')
var _ = require('lodash')
var format = require('string-template')

// this works

window.jsonFlickrFeed = function (data) {
  console.log('----------------')
  console.log('data', data)

  var photos = _(data.items)
    .map(function (item) {
      return {link: item.link, src: item.media.m}
    })
    .shuffle()
    .value()

  var body = $('.banner')
  photos.forEach(function (photo) {
    var div = $('<div style="background:url(' + photo.src.replace(/m\.jpg$/, 'z.jpg') +
      ');display:inline-block;float:left;background-size:cover;background-repeat:no-repeat;background-position:center;height:300px;width:300px;"/>')
    // console.log('div', div)
    body.append(div)
  })

  console.log('photos', photos)
}

function load () {
  var head_element = document.getElementsByTagName('head')[0]
  var newScript = document.createElement('script')
  newScript.type = 'text/javascript'
  newScript.src = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=splash&id=135596693@N07'
  // newScript.src = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&id=135596693@N07'
  head_element.appendChild(newScript)
}

load()
