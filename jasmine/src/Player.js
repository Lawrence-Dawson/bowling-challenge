function Player(){'use strict';
}

Player.prototype.roll = function(game, pins){
  game.currentFrameAdd(pins);
};
