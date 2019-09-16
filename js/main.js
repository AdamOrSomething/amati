class Game {
  constructor() {
    this.init();
  }
  
  init() {
    var jquery = document.createElement('script');
    jquery.src = 'js/jquery.js';
    document.body.appendChild(jquery);
    
    this.iteration = [0];
    this.story();
  }
  
  story() {
    this.storyline = [
      'You are in a clearing.\nYou are in a clearing, and you\'re alone.\nYou are in a clearing, and the path leads left or right.' +
      'CHOICESLeft:Right',
      {
        
      }
    ];
  }
  
  play() {
    $('select').empty();
    
    var current_storyline = this.storyline;
    for(i=0;i<this.iteration.length;i++) {
      current_storyline = current_storyline[this.iteration[i]];
    }
    var split = current_storyline.split('CHOICES');
    var text = split[0];
    var options = split[1].split(':');
    
    var choice;
    $('#output').text(text);
    $.each(options, function(index, value) {
      choice = document.createElement('option');
      $(choice).text(value);
      $('select').append(choice);
    });
  }
}

var game = new Game();
game.init();
