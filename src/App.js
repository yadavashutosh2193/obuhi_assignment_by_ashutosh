import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from './Container';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Container/>
    </BrowserRouter>
  );
}

export default App;
