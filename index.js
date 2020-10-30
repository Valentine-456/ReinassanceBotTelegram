const app = require("express")();
const { Telegraf, Markup } = require("telegraf");
const path = require("path");
const keyboards = require("./modules/keyboards");
const urls = require("./modules/url");
require("dotenv").config({ path: "./config.env" });
//!!!
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.redirect(process.env.TELEGRAM_BOT_URL);
});
app.listen(port, () => console.log(`App is running on port ${port}`));

const bot = new Telegraf(process.env.TELEGRAM_BOT_API_TOKEN);
const state = {
  lang: "EN",
  currentComposer: "",
};
//!!!
bot.catch((err, ctx) => {
  console.log(`Encountered an error for ${ctx.updateType}`, err);
});
//!!!

bot.start((ctx) =>
  ctx.reply("Hello", Markup.keyboard(keyboards.keyboard.default).extra())
);

bot.hears("About this bot", (ctx) => {
  ctx.reply(
    "This bot was built using JavaScript(Node.js) and a small framework Telegraf.js for building telegram bots. Author: Bondarenko Valentine."
  );
  return ctx.replyWithMediaGroup([
    {
      media: { source: path.join(__dirname, "./img/tech/nodeJS.png") },
      type: "photo",
    },
    {
      media: { source: path.join(__dirname, "./img/tech/telegraf.png") },
      type: "photo",
    },
  ]);
});

bot.hears("List of composers", (ctx) => {
  return ctx.reply(
    "Here is the list of composers the music of whom you can listen.",
    Markup.keyboard(keyboards.keyboard.listOfComposers).extra()
  );
});

bot.hears("About classical music", (ctx) =>
  ctx.reply(
    "Here are some articles on following topics...",
    Markup.inlineKeyboard(keyboards.inlineKeyboard.aboutClassicalMusic).extra()
  )
);

bot.hears(
  [
    "Bach",
    "Beethoven",
    "Chaikovsky",
    "Chopin",
    "Haydn",
    "Mozart",
    "Schubert",
    "Vivaldi",
    "Wagner",
  ],
  (ctx) => {
    let url;
    switch (ctx.message.text) {
      case "Bach":
        url = "https://en.wikipedia.org/wiki/Johann_Sebastian_Bach";
        break;
      case "Beethoven":
        url = "https://en.wikipedia.org/wiki/Ludwig_van_Beethoven";
        break;
      case "Chaikovsky":
        url = "https://en.wikipedia.org/wiki/Pyotr_Ilyich_Tchaikovsky";
        break;
      case "Chopin":
        url = "https://en.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_Chopin";
        break;
      case "Haydn":
        url = "https://en.wikipedia.org/wiki/Joseph_Haydn";
        break;
      case "Mozart":
        url = "https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart";
        break;
      case "Schubert":
        url = "https://en.wikipedia.org/wiki/Franz_Schubert";
        break;
      case "Vivaldi":
        url = "https://en.wikipedia.org/wiki/Antonio_Vivaldi";
        break;
      case "Wagner":
        url = "https://en.wikipedia.org/wiki/Richard_Wagner";
        break;
    }
    state.currentComposer = ctx.message.text;

    return ctx.replyWithPhoto(
      {
        source: path.join(__dirname, `./img/composers/${ctx.message.text}.jpg`),
      },
      Markup.inlineKeyboard([
        [Markup.urlButton("About this composer", url)],
        ...keyboards.inlineKeyboard.composer,
      ]).extra()
    );
  }
);

bot.action("back", (ctx) => {
  try {
    ctx.reply("Main menu", Markup.keyboard(keyboards.keyboard.default).extra());
    return (state.currentComposer = "");
  } catch (e) {
    console.log(e);
  }
});

bot.action("music", (ctx) => {
  try {
    return ctx.reply(
      "Choose music",
      Markup.inlineKeyboard(
        keyboards.inlineKeyboard.music[state.currentComposer]
      ).extra()
    );
  } catch (e) {
    console.log(e);
  }
});

bot.action(
  [
    "Fuge",
    "Fantasia",
    "Wachet auf, ruft uns die Stimme, BWV 140",
    "Toccata and Fugue, BWV 565",
    "BWV 543-prelude",
    "BWV 543-fugue",
    //!!
    "Symphony No. 5, Op. 67 (1st movement)",
    "Piano Sonata No. 32 in C minor, Op. 111 (1st movement)",
    "Moonlight sonata, 1st movement",
    "Für Elise",
    "Piano Concerto No. 4, 1st movement",
    //!!
    "The finale of Tchaikovsky's Violin Concerto in D major",
    "Twelve Pieces for piano, Op. 40",
    "Romeo and Juliet Overture",
    "1812 overture",
    "Dance Of The Sugar Plum Fairies",
    //!!
    "Opus 25 - Twelve Grand Etudes - b minor",
    "Mazurka in a minor, op.17",
    "Waltz in D-flat major, Op. 64,(Minute Waltz)",
    "Étude Op. 10, No. 12(Revolutionary)",
    "Prelude Op. 28, No. 15 in D-flat major",
    "Cello Sonata in G minor, Op. 65 — 3rd movement",
    //!!
    "Cello Concerto in D, 1 recapcad",
    "E minor sonata",
    "Sonata Hob XVI 40 1st movement",
    "Sonata hob. XVI 23",
    "Symphony No. 101 in D major",
    "Die Schöpfung",
    //!!
    "Symphony 40 g-moll, KV 550",
    "Overture to Don Giovanni, K. 527",
    'Overture of "The Magic Flute"',
    "March of the Priests",
    "cosi fan tutte act II - no. 19 aria",
    //!!
    "Arpeggione Sonata",
    "Piano Sonata in B-flat major, D. 960",
    "Mass No. 2 in G major",
    "Octet in F major, D. 803",
    "Sonatina in A minor for Violin and Piano",
    //!!
    '"La primavera" (Spring): Allegro from the Four Seasons',
    "Summer  – Movement 1: Allegro non molto",
    "Autumn  – Movement 1:",
    "Winter  – Movement 1: Allegro non molto",
    "Motet for Soprano and Orchestra",
    //!!
    "Die Meistersinger von Nürnberg",
    "Ride of the Valkyries",
    "Götterdämmerung: Siegfried's Funeral March and Finale",
    "Tristan und Isolde",
  ],
  (ctx) => {
    try {
      return ctx.replyWithAudio(
        urls[state.currentComposer][ctx.update.callback_query.data]
      );
    } catch (e) {
      console.log(e);
    }
  }
);

bot.launch();
console.log("Bot is running");
