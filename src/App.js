import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Create from './components/create';
import Edit from './components/edit';
import List from './components/list';
import Nav from './components/nav';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Create/>}/>
          <Route path='/edit' element={<Edit/>}/>
          <Route path='/list' element={<List/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
