class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
  }
  
  setupTowers() {
    for (let i = 0; i < 3; i++) {
      console.log(this.$el);
      this.$el.append('<ul></ul>');
      let $ul = $('ul');
      $ul.eq(i).append('<li></li><li></li><li></li>');
      $ul.addClass('base');
    }
    for (let j = 2; j >= 0; j--) {
      let $li = $('li');
      if (j === 2) {
        $li.eq(j).addClass('large'); 
      } else if (j === 1) {
        $li.eq(j).addClass('medium'); 
      } else if (j === 0) {
        $li.eq(j).addClass('small'); 
      }
    }
  }
  
  
}


module.exports = View;