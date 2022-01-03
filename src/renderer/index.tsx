import { render } from 'react-dom';
import App from './App';
document.addEventListener('contextmenu', event => event.preventDefault());

render(<App />, document.getElementById('root'));
