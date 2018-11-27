class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    this.$el.html("<ul></ul>");
    const $ul = $('ul');
    for (let i = 0; i < 9; i++) {
      $ul.append("<li></li>");
      $('li').attr('id','square');
    }
    $ul.addClass('grid');
  }
}

module.exports = View;
