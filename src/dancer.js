
// // Creates and returns a new dancer object that can step

// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };




var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.step();
  this.setPosition(this.top, this.left);
};

makeDancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function() {
  var styleSettings = {
    top: '600px'
  };

  for (var i = 0; i < window.dancers.length; i++) {
    window.dancers[i].$node.css(styleSettings);
  }
};

makeDancer.prototype.interact = function() {
    for (var i = 0; i < window.dancers.length; i+=2) {
      var randomNum = Math.round(Math.random() * (1400 - 200) + 200);

      var styleSettings1 = {
        top: '550px',
        left: randomNum
      };

      var styleSettings2 = {
        top: '550px',
        left: randomNum + 100
      };

        window.dancers[i].$node.css(styleSettings1);
        window.dancers[i+1].$node.css(styleSettings2);
    }

};

