var autonomy = require('ardrone-autonomy');
var mission  = autonomy.createMission();

console.log('starting');

mission.takeoff()
       .wait(1000)
       .zero()
       .wait(1000)
       .land();

console.log('done');