!function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=1)}([function(t,r){t.exports=function(t){this.msg=t}},function(t,r,n){const e=n(2),o=n(3);$(()=>{const t=$(".ttt"),r=new o;new e(r,t)})},function(t,r){t.exports=class{constructor(t,r){this.game=t,this.$el=r,this.setupBoard()}bindEvents(){}makeMove(t){}setupBoard(){this.$el.html("<ul></ul>");const t=$("ul");for(let r=0;r<9;r++)t.append("<li></li>"),$("li").attr("id","square");t.addClass("grid")}}},function(t,r,n){const e=n(4),o=n(0);t.exports=class{constructor(){this.board=new e,this.currentPlayer=e.marks[0]}isOver(){return this.board.isOver()}playMove(t){this.board.placeMark(t,this.currentPlayer),this.swapTurn()}promptMove(t,r){this.board.print(),console.log(`Current Turn: ${this.currentPlayer}`),t.question("Enter rowIdx: ",n=>{const e=parseInt(n);t.question("Enter colIdx: ",t=>{const n=parseInt(t);r([e,n])})})}run(t,r){this.promptMove(t,n=>{try{this.playMove(n)}catch(t){if(!(t instanceof o))throw t;console.log(t.msg)}this.isOver()?(this.board.print(),this.winner()?console.log(`${this.winner()} has won!`):console.log("NO ONE WINS!"),r()):this.run(t,r)})}swapTurn(){this.currentPlayer===e.marks[0]?this.currentPlayer=e.marks[1]:this.currentPlayer=e.marks[0]}winner(){return this.board.winner()}}},function(t,r,n){const e=n(0);class o{constructor(){this.grid=o.makeGrid()}isEmptyPos(t){if(!o.isValidPos(t))throw new e("Is not valid position!");return null===this.grid[t[0]][t[1]]}isOver(){if(null!=this.winner())return!0;for(let t=0;t<3;t++)for(let r=0;r<3;r++)if(this.isEmptyPos([t,r]))return!1;return!0}placeMark(t,r){if(!this.isEmptyPos(t))throw new e("Is not an empty position!");this.grid[t[0]][t[1]]=r}print(){const t=[];for(let r=0;r<3;r++){const n=[];for(let t=0;t<3;t++)n.push(this.grid[r][t]?this.grid[r][t]:" ");t.push(`${n.join("|")}\n`)}console.log(t.join("-----\n"))}winner(){const t=[[[0,0],[0,1],[0,2]],[[1,0],[1,1],[1,2]],[[2,0],[2,1],[2,2]],[[0,0],[1,0],[2,0]],[[0,1],[1,1],[2,1]],[[0,2],[1,2],[2,2]],[[0,0],[1,1],[2,2]],[[2,0],[1,1],[0,2]]];for(let r=0;r<t.length;r++){const n=this.winnerHelper(t[r]);if(null!=n)return n}return null}winnerHelper(t){for(let r=0;r<o.marks.length;r++){const n=o.marks[r];let e=!0;for(let r=0;r<3;r++){const o=t[r];this.grid[o[0]][o[1]]!=n&&(e=!1)}if(e)return n}return null}static isValidPos(t){return 0<=t[0]&&t[0]<3&&0<=t[1]&&t[1]<3}static makeGrid(){const t=[];for(let r=0;r<3;r++){t.push([]);for(let n=0;n<3;n++)t[r].push(null)}return t}}o.marks=["x","o"],t.exports=o}]);