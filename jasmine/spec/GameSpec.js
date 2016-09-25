describe('Game', function(){
  var game;
  var player;
  var frames;

  beforeEach(function(){
    frames = new Frames();
    player = new Player();
    game = new Game();
  });

  it('The roll limit is 2 by default', function(){
    expect(game._rollCount).toEqual(2);
  });

  it('roll counts can be reduced by 1', function(){
    game.reduceRollOne();
    expect(game._rollCount).toEqual(1);
  });

  it('roll counts can be reduced by 2', function(){
    game.reduceRollTwo();
    expect(game._rollCount).toEqual(0);
  });

  it('adding a score under 10 reduces roll count by 1', function(){
    player.roll(game, 5);
    expect(game._rollCount).toEqual(1);
  });

  it('adding a score of 10 reduces roll count by two', function(){
    player.roll(game, 10);
    expect(game._rollCount).toEqual(0);
  });

  it('a frame ends and saves', function(){
    game._currentFrame = [8];
    game.endFrame(frames);
    expect(frames._allFrames).toContain(game._currentFrame);
  });

  xit('when roll count is 0 frame is saved and reset', function(){
    player.roll(game, 10);
    expect(game._currentFrame).toEqual([]);
  });
});
