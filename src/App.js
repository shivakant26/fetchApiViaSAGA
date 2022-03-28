import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Header from './Component/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Post from './Component/Post';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/post' element={<Post />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
