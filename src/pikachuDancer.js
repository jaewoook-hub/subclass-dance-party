var makePikachuDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="pikachu"></span>'); <- does NOT work
  this.$node.attr('id', 'pikachu').prepend('<img id = "pikachuImg" src="http://www.pngmart.com/files/2/Pikachu-PNG-File.png" style="width:100px;height:100px;" />');
};

makePikachuDancer.prototype = Object.create(makeDancer.prototype);
makePikachuDancer.prototype.constructor = makePikachuDancer;

makePikachuDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.mouseover(function() {
    $('#pikachu.dancer').fadeOut();
  });

  this.$node.mouseout(function() {
    $('#pikachu.dancer').fadeIn();
  });
};
