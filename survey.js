const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (song) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              console.log(` Name: ${name} \n Favourite Activity: ${activity} \n Favourite Song ${song} \n Favourite Meal: ${meal} \n Favourite Food: ${food} \n Favourite Sport: ${sport} \n Superpower: ${superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
