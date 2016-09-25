function Frames() {
  this._allFrames = [];
}

  Frames.prototype.save = function (frame) {
    this._allFrames.push(frame);
  };
