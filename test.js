var drone = require('ar-drone').createClient();
video = drone.getVideoStream();
console.log(video);