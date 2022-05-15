import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DataEntry from './components/DataEntry/DataEntry';
import Navbar from './components/navbar/Navbar';
import Images from './components/showImages/Images';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Images />} />
          <Route path='all-images' element={<Images />} />
          <Route path='data-entry' element={<DataEntry />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
