import './modules/glowfilter';
import _ from 'lodash';

class App {
  /**
   */
  constructor(){
    console.log(_.VERSION);
    console.log('app1');
    this.canvas = document.getElementById('cvs');
    this.stage = new createjs.Stage(this.canvas);
    this.glowFilter = new createjs.GlowFilter(0xFFFFFF, 1, 16, 16, 2, 2);

    this.stage.compositeOperation = 'lighter';

    // load the source image:
    let image = new Image();
    image.src = '../images/daisy.png';
    image.onload = (e) => {
      console.log('loaded');
      let tImage = e.target;
      let bitmap, bitmap2;
      let container = new createjs.Container();
      this.stage.addChild(container);

      bitmap = new createjs.Bitmap(tImage);
      container.addChild(bitmap);
      bitmap.x = 10;
      bitmap2 = new createjs.Bitmap(tImage);
      container.addChild(bitmap2);
      bitmap2.x = 37;

      bitmap.filters = [
        // new createjs.ColorFilter(255,255,255,0.3)
        this.glowFilter
      ];
      bitmap2.filters = [
        // new createjs.ColorFilter(255,255,255,0.3)
        this.glowFilter
      ];
      bitmap.cache(0, 0, 100, 100);
      bitmap2.cache(-50, -50, 100, 100);

      createjs.Ticker.addEventListener('tick', (_e) => {
        this.tick(_e);
      });
    };
  }

  tick(e){
    this.stage.update(e);
  }
}
let a = new App();

console.log(a);
