function Game(){'use strict';
  this._currentFrame = [];
  this._rollCount = 2;
}

  Game.prototype.currentFrameAdd = function(num) {
    if (num === 10) {
      this.reduceRollTwo();
    }
    else {
      this.reduceRollOne();
      }
    this._currentFrame.push(num);
   };

   Game.prototype.reduceRollOne = function () {
     this._rollCount -= 1;
   };

   Game.prototype.reduceRollTwo = function () {
     this._rollCount -= 2;
   };

   Game.prototype.endFrame = function (frames) {
     frames.save(this._currentFrame);
   };
