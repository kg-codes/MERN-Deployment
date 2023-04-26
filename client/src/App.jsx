import './App.css';
import { Routes, Route } from 'react-router-dom';
import AllStores from './components/AllStores';
import NewStore from './components/NewStore';
import OneStore from './components/OneStore';
import EditStore from './components/EditStore';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AllStores />} />
        <Route path='/stores/add' element={<NewStore />} />
        <Route path='/stores/:id' element={<OneStore />} />
        <Route path='/stores/edit/:id' element={<EditStore />} />
      </Routes>
    </div>
  );
}

export default App;
