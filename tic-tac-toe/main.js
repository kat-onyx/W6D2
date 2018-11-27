!function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=1)}([function(t,r){t.exports=function(t){this.msg=t}},function(t,r,e){const n=e(2),o=e(3);$(()=>{const t=$(".ttt"),r=new o;new n(r,t)})},function(t,r){t.exports=class{constructor(t,r){this.game=t,this.$el=r,this.setupBoard(),this.bindEvents()}bindEvents(){const t=$("ul");t.on("click",".square",r=>{let e=$(r.target);console.log(e.data("pos")),this.game.board.isEmptyPos(e.data("pos"))?(this.makeMove(e),this.game.playMove(e.data("pos"))):alert("Invalid move"),this.game.isOver()&&($(this.$el).append(`<p>You win, ${this.game.winner()}!</p>`),t.off("click",".square"))})}makeMove(t){t.text(this.game.currentPlayer),t.addClass("marker")}setupBoard(){const t=[];for(let r=0;r<3;r++)for(let e=0;e<3;e++)t.push([r,e]);this.$el.html("<ul></ul>");const r=$("ul");for(let e=0;e<9;e++){r.append("<li></li>");let n=$("li");$("li").addClass("square"),n.eq(e).data("pos",t[e])}r.addClass("grid")}}},function(t,r,e){const n=e(4),o=e(0);t.exports=class{constructor(){this.board=new n,this.currentPlayer=n.marks[0]}isOver(){return this.board.isOver()}playMove(t){this.board.placeMark(t,this.currentPlayer),this.swapTurn()}promptMove(t,r){this.board.print(),console.log(`Current Turn: ${this.currentPlayer}`),t.question("Enter rowIdx: ",e=>{const n=parseInt(e);t.question("Enter colIdx: ",t=>{const e=parseInt(t);r([n,e])})})}run(t,r){this.promptMove(t,e=>{try{this.playMove(e)}catch(t){if(!(t instanceof o))throw t;console.log(t.msg)}this.isOver()?(this.board.print(),this.winner()?console.log(`${this.winner()} has won!`):console.log("NO ONE WINS!"),r()):this.run(t,r)})}swapTurn(){this.currentPlayer===n.marks[0]?this.currentPlayer=n.marks[1]:this.currentPlayer=n.marks[0]}winner(){return this.board.winner()}}},function(t,r,e){const n=e(0);class o{constructor(){this.grid=o.makeGrid()}isEmptyPos(t){if(!o.isValidPos(t))throw new n("Is not valid position!");return null===this.grid[t[0]][t[1]]}isOver(){if(null!=this.winner())return!0;for(let t=0;t<3;t++)for(let r=0;r<3;r++)if(this.isEmptyPos([t,r]))return!1;return!0}placeMark(t,r){if(!this.isEmptyPos(t))throw new n("Is not an empty position!");this.grid[t[0]][t[1]]=r}print(){const t=[];for(let r=0;r<3;r++){const e=[];for(let t=0;t<3;t++)e.push(this.grid[r][t]?this.grid[r][t]:" ");t.push(`${e.join("|")}\n`)}console.log(t.join("-----\n"))}winner(){const t=[[[0,0],[0,1],[0,2]],[[1,0],[1,1],[1,2]],[[2,0],[2,1],[2,2]],[[0,0],[1,0],[2,0]],[[0,1],[1,1],[2,1]],[[0,2],[1,2],[2,2]],[[0,0],[1,1],[2,2]],[[2,0],[1,1],[0,2]]];for(let r=0;r<t.length;r++){const e=this.winnerHelper(t[r]);if(null!=e)return e}return null}winnerHelper(t){for(let r=0;r<o.marks.length;r++){const e=o.marks[r];let n=!0;for(let r=0;r<3;r++){const o=t[r];this.grid[o[0]][o[1]]!=e&&(n=!1)}if(n)return e}return null}static isValidPos(t){return 0<=t[0]&&t[0]<3&&0<=t[1]&&t[1]<3}static makeGrid(){const t=[];for(let r=0;r<3;r++){t.push([]);for(let e=0;e<3;e++)t[r].push(null)}return t}}o.marks=["x","o"],t.exports=o}]);