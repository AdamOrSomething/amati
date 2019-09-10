class Game {
  constructor() {
    this.init();
  }
  
  init() {
    var jquery = document.createElement('script');
    jquery.src = 'js/jquery.js';
    document.body.appendChild(jquery);
    
    this.iteration = [];
    this.story();
  }
  
  story() {
    this.storyline = {
      'You are in a clearing.\nYou are in a clearing, and you’re alone.\nYou are in a clearing, and the path leads left or right.': [
        '
       ]
    }
  }
  
  play() {
    
  }
}

var game = new Game();
game.init();
