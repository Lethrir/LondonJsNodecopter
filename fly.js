var arDrone = require('ar-drone');
var client = arDrone.createClient();
/*
client.on('navdata', function(data){
  console.log('x' + data.demo.rotation.x);
  console.log('y' + data.demo.rotation.y);
  console.log('lr' + data.demo.rotation.leftRight);
  console.log('fb' + data.demo.rotation.frontBack);

});
*/
client.takeoff();

var speed = 0.25;

client
  //.after(5000, function(){
  //  this.calibrate(0);
  //})
  //.after(5000, function(){
  //  this.animate('phiDance');
  //})
  //.after(5000, function() {
  //  this.clockwise(0.5);
  //})

/*
  .after(1000, function(){
    this.front(speed);
  })
  .after(1000, function(){
    this.stop();
  })
  .after(1000, function(){
    this.left(speed);
  })
  .after(1000, function(){
    this.stop();
  })
  .after(1000, function(){
    this.back(speed);
  })
  .after(1000, function(){
    this.stop();
  })
  .after(1000, function(){
    this.right(speed);
  })
*/

.after(2000, function(){
  this.animate('yawShake', 5000);
})
.after(2000, function(){
  this.stop();
  this.land();
});