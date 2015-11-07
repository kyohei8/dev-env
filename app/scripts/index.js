import { VERSION } from 'lodash';
console.log(VERSION);

class App{
  constructor(){
    const sub = document.getElementById('sub');
    sub.textContent = ' > update by JavaScript <';
  }

  foo(){
    console.log('bar.');
  }
}

const app = new App();
app.foo();
