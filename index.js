// synchronous import
import {add} from './add.rs';
window.setTimeout( () => console.log(add(1, 2)), 1000);