var dogesBackground = {
  dogeHeight: 38,
  dogeWidth: 44,
  doges: [],
  dogeImageSource: 'https://i.imgur.com/q3eG2qY.gif',
  maxDoges: 50,
  hue_rotation: 0,
  move: function() {
    this.setCanvasSize();
    this.hue_rotation += 12;
    for (var i = 0; i < this.doges.length; i++) {
      var doge = this.doges[i];
      doge.x += doge.xs;
      doge.y += doge.ys;
      if (doge.y > this.h + this.dogeHeight) {
        doge.x = Math.random() * this.w;
        doge.y = -1 * this.dogeHeight;
      }
      var dogeImage = doge.img;
      dogeImage.style.left = doge.x + 'px';
      dogeImage.style.top = doge.y + 'px';
      dogeImage.style.filter = 'hue-rotate(' + this.hue_rotation + 'deg) brightness(300%)';
    }
  },
  setCanvasSize: function() {
    this.w = window.innerWidth;
    this.h = window.innerHeight;
  },
  initialize: function() {
    this.canvas = $('#canvas')[0];
    this.setCanvasSize();

    for (var i = 0; i < this.maxDoges; i++) {
      var dogeImage = document.createElement('img');
      dogeImage.src = this.dogeImageSource;
      this.canvas.appendChild(dogeImage);
      var doge = {
        img: dogeImage,
        scale: Math.random() * 2 + 0.5,
        x: Math.random() * this.w,
        y: -6 * this.dogeWidth + Math.random() * this.h,
        xs: Math.random() - 0.5,
        ys: Math.random() * 2 + 1,
        rotation: Math.random() * 360
      };
      this.doges.push(doge);
      dogeImage.width = this.dogeWidth * doge.scale;
      dogeImage.height = this.dogeHeight * doge.scale;
      dogeImage.style.position = 'absolute';
      dogeImage.style.left = doge.x + 'px';
      dogeImage.style.top = doge.y + 'px';
      dogeImage.style.transform = 'rotate(' + doge.rotation + 'deg)';
    }

    setInterval($.proxy(this.move, this), 30);
  }
};

$(document).ready(function() {
  dogesBackground.initialize();
});