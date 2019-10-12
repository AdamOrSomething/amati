class Game {
    static display(text, showAnswer = true) {
        $('#input').hide();

        var text_array = text.split('\n');
        var i = 0;

        $('#output').html('');

        if(text_array[0] == '') {
            text_array.splice(0, 1);
        }
        if(text_array[text_array.length-1] == '') {
            text_array.splice(text_array.length-1, text_array.length);
        }
        
        setTimeout(() => {
            Game.displayTimeout(text_array, i,
            showAnswer);
        }, 500);
    }

    static displayTimeout(text_array, i, showAnswer) {
        $('#output').append(text_array[i].trim());
        i++;

        if (!(i >= text_array.length)) {
            $('#output').append('<br><br>');
            setTimeout(() => {
                Game.displayTimeout(text_array, i,
                    showAnswer);
            }, ((text_array[i - 1].length - (text_array[i - 1].split(' ').length - 1)) * 30));
            return;
        }
        else if (showAnswer) {
            setTimeout(() => {
                $('#input').show();
            }, ((text_array[i - 1].length - (text_array[i - 1].split(' ').length - 1)) * 50));
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
            'You are in a clearing.\nYou are in a clearing, and you\'re alone.\nYou are in a clearing, and the path leads left or right.CHOICESLeft:Right',
            [
                [
                    `
You follow the path until it leads out of the forest, up a hill, and the ensuing sight leaves you breathless.
It's a skyline. Tall, slender buildings rise in the distance, jagged and tapered to a point high above the clouds. They seem to  pierce the clouds, their height obscene, as if attempting to offend nature with their pure excess of elevation. They look as if someone broke a mirror and stood the shards upright.
It’s beautiful. You walk down, dazed, into a street full of people. After hours in a forest, the sight of so many people throws you off for a second and you stand there in a trance until someone bumps into your shoulder, throwing you down. He apologizes quickly and, with an upwards gesture, he drops his briefcase in midair. You automatically hold your hand out to stop it, but to your shock it doesn’t fall. It just… stands there in midair, suspended by an unseen force. The man misinterprets your shock and replies good-naturedly “Hey, not all businessmen are corrupt and greedy.”
CHOICESHmm Suspicion:No Suspicion
          `,
                    [
                        [
                            `
He smiles, but something’s off about it. You get up, and he leans forward. His eyes, once full of humor, now betray nothing. You can’t detect any emotion. He leans forward, over your shoulder, hissing into your ear.
“----------------?”
“What?”
You feel pressure behind your ear, and you collapse.

“You’re absolutely sure it’s him.”
“Yes.”
“Caaarl…”
“I saw this man with my own eyes that night. I’m absolutely sure it’s him.”
“And how did he respond to the query?”
You peek through the tiniest crack you can possibly create with your eyelids. You’re on a metal slab, restrained by metal cuffs welded deep into the slab. Monitors displaying things you don’t understand surround you. The slab is slightly elevated, about a foot off the floor, and angled so you’re in a semi-upright position, feet pointed at the two men in front of you. They’re facing each other in deep conversation. They’re wearing ---, with ---. One of them is tall and thin, with short blond hair. The other is slightly shorter, with long and black hair tied back in a ponytail. Suddenly one of the monitors starts beeping rapidly. They spin around, look at you. Blond walks over and examines your restraints, and Ponytail sneers at you menacingly.
“Look who’s awake,” says Blond. 
“Where am I?!” you say, hysteria starting to rise in your chest. “How’d I get here? Who are you people?”
Blond grins. “Welcome,” he says, “To Area 77!”
Ponytail snickers.
“What my friend’s trying to say is, this place has a name that’s heavily classified. The mere knowledge of it is a capital offense, and being in it without clearance…”
Blond draws his finger across his throat and hangs his head backward limply. 
You don’t know how to respond to that.CHOICESFight against your restraints:Play along and wait
              `,
                            [
                                [
                                    // TODO
                                    `
Before you do, a monitor to your right beeps, as if announcing your intent. Then you thrash wildly around, but you don’t gain an inch of give. The cuffs tighten around your wrists. Blond smirks. “Ah, so you’ve triggered Gerald.”
“What?”
Ponytail pokes the monitor that beeped. “This is Gerald. He will beep when your heart pressure rises substantially, making him a good indicator of when you’re lying, nervous or about to do something.”
“So don’t,” Blond finishes.
                  `,
                                    [
                                        [],
                                        []
                                    ]
                                ],
                                [
                                    // TODO
                                    `
“So let me guess, I don’t leave this place alive?” you say with a nervous chuckle.
Ponytail claps sarcastically, and Blond smiles mockingly. “Ah!  He gets it!  You’re a smart one, ain’tcha?” he says. <i>If they were a bit less psycho, they could make a half-decent comedy duo</i>, you think.  
Suddenly Blond’s expression hardens.  He raises a pistol to your forehead, seemingly out of nowhere.  You stare down the barrel.  
Your heart stops.
“Now, where were you yesterday?”
You stammer, but nothing comes out.
Blond presses the gun further into your forehead.
“Where. Were. You?”
You can barely force out an answer.
“I-I don’t know!  Th-th-the earliest thing I c-can remember is waking up in the woods with no memory!”
They both raise an eyebrow simultaneously.
“No memory? None at all?”
“No…”
Ponytail narrows his eyes, and Blond gives you a perplexed look.
                  `
                                ]
                            ]
                        ],
                        [
                            // TODO
                        ]
                    ]
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
            current_storyline = current_storyline[this.iteration[
                i]];
        }

        try {
            var split = current_storyline[0].split('CHOICES');
            var text = split[0];

            var options = split[1].split(':');
        }
        catch (e) {
            var text = current_storyline[0].trim() + '\n<b>THE END</b>';
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

    continue () {
        this.iteration.push($('select').val());
        this.play();
    }

}

window.onerror = function(message, othervar, othervar2, othervar3,
    error) {
    alert(error.stack);
}

var game = new Game();
