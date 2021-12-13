import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Main from './components/Main/Main';
console.log('iufdhgiuhiufdhg');
function App() {
  return (
    <Provider store={store}>
      {
       <Main />
      }
    </Provider>
  );
}


export default App;
