import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VideoPage from './pages/VideoPage/VideoPage';
import UploadPage from './pages/UploadPage/UploadPage';


function App() {
return (
  <BrowserRouter>
    <div className="App">
      <Routes>
            <Route path="/" element={<VideoPage />} />
            <Route path="/video-upload" element={<UploadPage />} />
            <Route path="/video-player/:videoId" element={<VideoPage />} />
      </Routes>
    </div>  
  </BrowserRouter>
   );
 }

export default App;
