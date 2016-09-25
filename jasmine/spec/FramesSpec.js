describe('Frames', function(){
  var game;
  var player;
  var frames;

  beforeEach(function(){
    frames = new Frames();
    player = new Player();
    game = new Game();
  });

  it('can save a frame', function(){
    frames.save(game._currentFrame);
    expect(frames._allFrames).toContain(game._currentFrame);
  });

});
