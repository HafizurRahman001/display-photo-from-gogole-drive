import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DataEntry from './components/DataEntry/DataEntry';
import Home from './components/Home/Home';
import ImageFolder from './components/ImageFolder/ImageFolder';
import Navbar from './components/navbar/Navbar';
import PaginatedItems from './components/paginatedItems/PaginatedItems';
import Images from './components/showImages/Images';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='all-images' element={<Images />} />
          <Route path='image-folder/:id' element={<ImageFolder />} />
          <Route path='data-entry' element={<DataEntry />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
