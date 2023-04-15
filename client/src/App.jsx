import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Video from "./pages/Video";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/videos/add' element={<Add />} />
            <Route path='/videos/:videoId' element={<Video />} />
            <Route path='/videos/edit/:videoId' element={<Edit />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
