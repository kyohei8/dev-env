import _ from 'lodash';

class App {
  constructor(){
    console.log(_.VERSION);
    console.log('app1');
  }
}

const app = new App();
console.log(app);
