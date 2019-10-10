class Game {
  static display(text, showAnswer = true) {
    $('#input').hide();

    var text_array = text.split('\n');
    var i = 0;

    $('#output').html('');

    setTimeout(() => {
      Game.displayTimeout(text_array, i, showAnswer);
    }, 1000);
  }
  
  static displayTimeout(text_array, i, showAnswer) {
    $('#output').append(text_array[i] + '<br>');
      
      if(!(++i >= text_array.length)) {
        setTimeout(() => {
          Game.displayTimeout(text_array, i, showAnswer);
        }, (text_array[i-1].length - (text_array[i-1].split(' ') + 1) * 50));
      } else if(showAnswer) {
        setTimeout(() => {
          $('#input').show();
        }, (text_array[i-1].length - (text_array[i-1].split(' ') + 1) * 50));
      }
  }

  constructor() {
    this.init();
  }

  init() {
    this.iteration = [];
    this.story();


    $('#start').click(function() {
      $(this).hide();
      $('#game').show();
      game.play();
    });

    $('#submit').click(function() {
      game.continue();
    });

  }

  story() {
    this.storyline = [
      'You are in a clearing.\nYou are in a clearing, and you\'re alone.\nYou are in a clearing, and the path leads left or right.' +
      'CHOICESLeft:Right',
      [
        [
          ''
        ],
        [
          `
You come across a man on his knees in the center of a clearing.  He’s facing away from you, his long black hair falling down to his shoulders.  His jeans are frayed at the cuffs and full of grass stains, his hands at his waist, his fingers curled slightly. You step on a branch.  The sound startles to the man.  He spins around and stands up, suddenly brandishing a knife at you.  Its crooked, silver blade points directly at your heart.  His hair falls out of his face.
High, arching eyebrows.
Thin lips the color of dried blood.
Eyes, black eyes that convey no soul, fathomless as black pits cut into the flesh.
He starts to close the distance between you at a frightening speed.
And a moment later, the hilt in buried in your chest.
           `
        ]
      ]
    ];
  }

  play() {
    $('select').empty();

    var current_storyline = this.storyline;
    for (var i = 0; i < this.iteration.length; i++) {
      current_storyline = current_storyline[this.iteration[i]];
    }

    try {
      var split = current_storyline[0].split('CHOICES');
      var text = split[0];

      var options = split[1].split(':');
    } catch (e) {
      var text = current_storyline[0] + '\n<b>THE END</b>';
      Game.display(text, false);
      return;
    }

    var choice;
    Game.display(text);
    $.each(options, function(index, value) {
      choice = document.createElement('option');
      $(choice).text(value);
      $(choice).val(index);
      $('select').append(choice);
    });

    this.iteration.push(1);
  }

  continue() {
    this.iteration.push($('select').val());
    this.play();
  }
  
}

window.onerror = function(message, othervar, othervar2, othervar3, error) {
  alert(error.stack);
}

var game = new Game();
