const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];

rl.question('What is your name? Nicknames are also acceptable? ', (answer) => {
  answers.push(answer);
  rl.question('What is an activity you like doing? ', (answer) => {
    answers.push(answer);
    rl.question('What do you listen to while doing that? ', (answer) => {
      answers.push(answer);
      rl.question('Which meal of the day is your favorite? ', (answer) => {
        answers.push(answer);
        rl.question('What is your favorite thing to eat for that meal? ', (answer) => {
          answers.push(answer);
          rl.question('Which sport is your absolute favorite? ', (answer) => {
            answers.push(answer);
            rl.question('What is your superpower? In a few words, tell us what you\'re amazing at! ', (answer) => {
              answers.push(answer);
              console.log("");
              console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]}` +
                ` for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});