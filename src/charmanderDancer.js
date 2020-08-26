var makeCharmanderDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="pikachu"></span>'); <- does NOT work
  this.$node.attr('id', 'charmander').prepend('<img id = "charmanderImg" src="https://giantbomb1.cbsistatic.com/uploads/scale_small/13/135472/1891761-004charmander.png" style="width:100px;height:100px;" />');
};

makeCharmanderDancer.prototype = Object.create(makeDancer.prototype);
makeCharmanderDancer.prototype.constructor = makeCharmanderDancer;

makeCharmanderDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};