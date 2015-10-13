import _ from 'lodash';

class App {
  constructor(){
    console.log(_.VERSION);
    console.log('app11')
    const sub = document.getElementById('sub');
    sub.textContent = ' > update by JavaScript <';
  }
}

const app = new App();
console.log(app);
