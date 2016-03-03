import Inferno from 'inferno';
import InfernoDOM from 'inferno-dom';
import MyComponent from './mycomponent';

const message = "Hello world";

InfernoDOM.render(<MyComponent message={ message } />, document.getElementById('root'));
