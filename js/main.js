class Game {
  constructor() {
    this.init();
    this.play();
  }

  init() {
    this.iteration = [];
    this.story();
  }

  story() {
    this.storyline = [
      'You are in a clearing.\nYou are in a clearing, and you\'re alone.\nYou are in a clearing, and the path leads left or right.' +
      'CHOICESLeft:Right',
      [
        [
          'TestCHOICES1'
        ],
        [
          
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

    var split = current_storyline[0].split('CHOICES');
    var text = split[0];
    var options = split[1].split(':');

    var choice;
    $('#output').html(text.replace(/\n/g, '<br>'));
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

$('#start').click(function() {
  $(this).hide();
  $('#game').show();
});

$('#submit').click(function() {
  game.continue();
});
