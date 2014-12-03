var params = {
  audio: true,
  video: true,
  localElement: 'localVideo'
  // video: {
  //   mandatory: {maxWidth: 1360, maxHeight: 900, maxFrameRate: 5},
  //   optional: []
  // }
};

webrtc.getUserMedia(params, function(stream, err) {
  if (stream) {
    console.log(stream);
  } else {
    console.log(err);
  }
});

$('#photo').on('click', function() {
  var src = webrtc.takePhoto('localVideo');
  $('body').append('<img src="'+src+'">');
});
