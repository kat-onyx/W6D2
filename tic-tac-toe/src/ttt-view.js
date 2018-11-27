class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    const $ul = $('ul');
    
    $ul.on('click', '.square', (e) => {
      let target = $(e.target);
      console.log(target.data('pos'));
      debugger;
      if (this.game.board.isEmptyPos(target.data('pos'))) {
        this.makeMove(target);
        this.game.playMove(target.data('pos'));
      } else {
        alert('Invalid move');
      }
    });
  }

  makeMove($square) {
    // this.game.playMove($s.data('pos'));
    $square.text(this.game.currentPlayer);
  }

  setupBoard() {
    const pos = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        pos.push([i, j]);
      }
    }
    
    this.$el.html("<ul></ul>");
    const $ul = $('ul');
    for(let k = 0; k < 9; k++) {
      $ul.append("<li></li>");
      let $li = $('li');
      $('li').addClass('square');
      $li.eq(k).data('pos', pos[k]);
    }
  
    $ul.addClass('grid');
  }
}

module.exports = View;
