
import { Provider } from 'react-redux';
import './App.css';
import Main from './layouts';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
    
  );
}

export default App;
