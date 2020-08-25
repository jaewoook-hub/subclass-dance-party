var makeCharmanderDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="pikachu"></span>'); <- does NOT work
  this.$node.attr('id', 'charmander').prepend('<img id = "charmanderImg" src="https://giantbomb1.cbsistatic.com/uploads/scale_small/13/135472/1891761-004charmander.png" style="width:100px;height:100px;" />');

  // $('#pikachuImg').width('100px');
  // $('#pikachuImg').height('100px');

  // $('#theDiv').prepend('<img id="theImg" src="theImg.png" />')

  // var oldStep = makeDancer.prototype.step.call(this);
  // this.oldStep = makeDancer.prototype.step;
  // console.log(this);
};

makeCharmanderDancer.prototype = Object.create(makeDancer.prototype);
makeCharmanderDancer.prototype.constructor = makeCharmanderDancer;

makeCharmanderDancer.prototype.step = function() {
  //console.log(this);
  //this.oldStep;
  //console.log(this.oldStep);
  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
  //this.$node.effect( "shake", 1000 );
  //this.$node.rotate(180);
};