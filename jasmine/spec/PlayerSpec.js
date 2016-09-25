describe('Player', function(){
  var game;
  var player;

  beforeEach(function(){
    player = new Player();
    game = new Game();
  });

  it('A player can enter their score and its added to a frame', function(){
    player.roll(game, 5);
    expect(game._currentFrame).toEqual([5]);
  });
});
