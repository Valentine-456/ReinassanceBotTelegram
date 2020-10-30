const { Markup } = require("telegraf");
module.exports = {
  keyboard: {
    default: [
      ["About this bot"],
      ["List of composers"],
      ["About classical music"],
    ],
    listOfComposers: [
      ["Bach", "Beethoven", "Chaikovsky"],
      ["Chopin", "Haydn", "Mozart"],
      ["Schubert", "Vivaldi", "Wagner"],
    ],
  },
  inlineKeyboard: {
    composer: [
      // Markup.urlButton('About composer'),
      [Markup.callbackButton("Move to music", "music")],
      [Markup.callbackButton("back", "back")],
    ],
    aboutClassicalMusic: [
      [
        Markup.urlButton(
          "Classical music",
          "https://en.wikipedia.org/wiki/Classical_music"
        ),
      ],
      [
        Markup.urlButton(
          "List of composers by era",
          "https://en.wikipedia.org/wiki/List_of_classical_music_composers_by_era"
        ),
      ],
      [
        Markup.urlButton(
          "Some musical instruments",
          "https://sites.google.com/site/classicalmusicinthe21stcentury/background/instruments"
        ),
      ],
    ],
    music: {
      Bach: [
        [
          Markup.callbackButton("Fantasia", "Fantasia"),
          Markup.callbackButton("Fuge", "Fuge"),
        ],
        [
          Markup.callbackButton("BWV 543-prelude", "BWV 543-prelude"),
          Markup.callbackButton("BWV 543-fugue", "BWV 543-fugue"),
        ],
        [
          Markup.callbackButton(
            "Wachet auf, ruft uns die Stimme, BWV 140",
            "Wachet auf, ruft uns die Stimme, BWV 140"
          ),
          Markup.callbackButton(
            "Toccata and Fugue, BWV 565",
            "Toccata and Fugue, BWV 565"
          ),
        ],
      ],
      Beethoven: [
        [
          Markup.callbackButton(
            "Symphony No. 5, Op. 67 (1st movement)",
            "Symphony No. 5, Op. 67 (1st movement)"
          ),
          Markup.callbackButton(
            "Piano Sonata No. 32 in C minor, Op. 111 (1st movement)",
            "Piano Sonata No. 32 in C minor, Op. 111 (1st movement)"
          ),
        ],
        [
          Markup.callbackButton(
            "Moonlight sonata, 1st movement",
            "Moonlight sonata, 1st movement"
          ),
          Markup.callbackButton("Für Elise", "Für Elise"),
        ],
        [
          Markup.callbackButton(
            "Piano Concerto No. 4, 1st movement",
            "Piano Concerto No. 4, 1st movement"
          ),
        ],
      ],
      Chaikovsky: [
        [
          Markup.callbackButton(
            "The finale of Tchaikovsky's Violin Concerto in D major",
            "The finale of Tchaikovsky's Violin Concerto in D major"
          ),
          Markup.callbackButton(
            "Twelve Pieces for piano, Op. 40",
            "Twelve Pieces for piano, Op. 40"
          ),
        ],
        [
          Markup.callbackButton(
            "Romeo and Juliet Overture",
            "Romeo and Juliet Overture"
          ),
          Markup.callbackButton("1812 overture", "1812 overture"),
        ],
        [
          Markup.callbackButton(
            "Dance Of The Sugar Plum Fairies",
            "Dance Of The Sugar Plum Fairies"
          ),
        ],
      ],
      Chopin: [
        [
          Markup.callbackButton(
            "Opus 25 - Twelve Grand Etudes - b minor",
            "Opus 25 - Twelve Grand Etudes - b minor"
          ),
          Markup.callbackButton(
            "Mazurka in a minor, op.17",
            "Mazurka in a minor, op.17"
          ),
        ],
        [
          Markup.callbackButton(
            "Waltz in D-flat major, Op. 64,(Minute Waltz)",
            "Waltz in D-flat major, Op. 64,(Minute Waltz)"
          ),
          Markup.callbackButton(
            "Étude Op. 10, No. 12(Revolutionary)",
            "Étude Op. 10, No. 12(Revolutionary)"
          ),
        ],
        [
          Markup.callbackButton(
            "Prelude Op. 28, No. 15 in D-flat major",
            "Prelude Op. 28, No. 15 in D-flat major"
          ),
          Markup.callbackButton(
            "Cello Sonata in G minor, Op. 65 — 3rd movement",
            "Cello Sonata in G minor, Op. 65 — 3rd movement"
          ),
        ],
      ],
      Haydn: [
        [
          Markup.callbackButton(
            "Cello Concerto in D, 1 recapcad",
            "Cello Concerto in D, 1 recapcad"
          ),
          Markup.callbackButton("E minor sonata", "E minor sonata"),
        ],
        [
          Markup.callbackButton(
            "Sonata Hob XVI 40 1st movement",
            "Sonata Hob XVI 40 1st movement"
          ),
          Markup.callbackButton("Sonata hob. XVI 23", "Sonata hob. XVI 23"),
        ],
        [
          Markup.callbackButton(
            "Symphony No. 101 in D major",
            "Symphony No. 101 in D major"
          ),
          Markup.callbackButton("Die Schöpfung", "Die Schöpfung"),
        ],
      ],
      Mozart: [
        [
          Markup.callbackButton(
            "Symphony 40 g-moll, KV 550",
            "Symphony 40 g-moll, KV 550"
          ),
          Markup.callbackButton(
            "Overture to Don Giovanni, K. 527",
            "Overture to Don Giovanni, K. 527"
          ),
        ],
        [
          Markup.callbackButton(
            'Overture of "The Magic Flute"',
            'Overture of "The Magic Flute"'
          ),
          Markup.callbackButton("March of the Priests", "March of the Priests"),
        ],
        [
          Markup.callbackButton(
            "cosi fan tutte act II - no. 19 aria",
            "cosi fan tutte act II - no. 19 aria"
          ),
        ],
      ],
      Schubert: [
        [
          Markup.callbackButton("Arpeggione Sonata", "Arpeggione Sonata"),
          Markup.callbackButton(
            "Piano Sonata in B-flat major, D. 960",
            "Piano Sonata in B-flat major, D. 960"
          ),
        ],
        [
          Markup.callbackButton(
            "Mass No. 2 in G major",
            "Mass No. 2 in G major"
          ),
          Markup.callbackButton(
            "Octet in F major, D. 803",
            "Octet in F major, D. 803"
          ),
        ],
        [
          Markup.callbackButton(
            "Sonatina in A minor for Violin and Piano",
            "Sonatina in A minor for Violin and Piano"
          ),
        ],
      ],
      Vivaldi: [
        [
          Markup.callbackButton(
            '"La primavera" (Spring): Allegro from the Four Seasons',
            '"La primavera" (Spring): Allegro from the Four Seasons'
          ),
          Markup.callbackButton(
            "Summer  – Movement 1: Allegro non molto",
            "Summer  – Movement 1: Allegro non molto"
          ),
        ],
        [
          Markup.callbackButton(
            "Autumn  – Movement 1:",
            "Autumn  – Movement 1:"
          ),
          Markup.callbackButton(
            "Winter  – Movement 1: Allegro non molto",
            "Winter  – Movement 1: Allegro non molto"
          ),
        ],
        [
          Markup.callbackButton(
            "Motet for Soprano and Orchestra",
            "Motet for Soprano and Orchestra"
          ),
        ],
      ],
      Wagner: [
        [
          Markup.callbackButton(
            'Die Meistersinger von Nürnberg',
            'Die Meistersinger von Nürnberg'
          ),
        ],
        [
          Markup.callbackButton(
            'Ride of the Valkyries',
            'Ride of the Valkyries'
          ),
        ],
        [
          Markup.callbackButton(
            'Tristan und Isolde',
            'Tristan und Isolde'
          ),
        ],
        [
          Markup.callbackButton(
            "Götterdämmerung: Siegfried's Funeral March and Finale",
            "Götterdämmerung: Siegfried's Funeral March and Finale"
          ),
        ],
      ],
    },
  },
};
