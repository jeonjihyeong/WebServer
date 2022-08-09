import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import InputSample from './components/InputSample'

function App() {
  return (
    <div className="App">
      <InputSample></InputSample>
      <Hello name="홍길동ㅇㅇ" color="red" />
    </div>
  );
}

export default App;
