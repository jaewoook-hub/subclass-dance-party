var makePikachuDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="pikachu"></span>'); <- does NOT work
  this.$node.attr('id', 'pikachu').prepend('<img id = "pikachuImg" src="http://www.pngmart.com/files/2/Pikachu-PNG-File.png" style="width:100px;height:100px;" />');
  // $('#pikachuImg').width('100px');
  // $('#pikachuImg').height('100px');

  // $('#theDiv').prepend('<img id="theImg" src="theImg.png" />')

  // var oldStep = makeDancer.prototype.step.call(this);
  // this.oldStep = makeDancer.prototype.step;
  // console.log(this);
};

makePikachuDancer.prototype = Object.create(makeDancer.prototype);
makePikachuDancer.prototype.constructor = makePikachuDancer;

makePikachuDancer.prototype.step = function() {
  //console.log(this);
  //this.oldStep;
  //console.log(this.oldStep);
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
}