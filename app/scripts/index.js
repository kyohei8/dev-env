import 'babel-polyfill';
import { VERSION } from 'lodash';

class App{
  constructor(){
    const sub = document.getElementById('sub');
    sub.textContent = ` > use lodash version => ${VERSION} <`;
  }
  foo(){
    // console.log('bar.');
  }
}

const app = new App();
app.foo();
