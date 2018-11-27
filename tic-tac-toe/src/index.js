const View = require('./ttt-view.js');
const Game = require('../solution/game.js');

  $(() => {
    // Your code here
    const rootEl = $(".ttt");
    const game = new Game();
    new View(game, rootEl);
  });
