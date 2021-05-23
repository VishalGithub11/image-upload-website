import React,{useState} from 'react'
import './App.css';
import ImageGrid from './components/ImageGrid';
import Title from './components/Title.js'
import UploadForm from "./components/UploadForm.js";
 import Enlarge from "./components/Enlarge";

function App() {
  const [selectedImg, setselectedImg] = useState(null)
  return (
    <div className="title">
      <Title />
      <UploadForm />
      <ImageGrid setselectedImg={setselectedImg} />
      {selectedImg && (< Enlarge selectedImg={selectedImg} setselectedImg={setselectedImg} />)}
    </div>
  );
}

export default App;
