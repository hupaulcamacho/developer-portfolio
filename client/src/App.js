import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Homepage from './components/Homepage';
import Projects from './components/Projects';

function App() {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const imgs = [
      './assets/ryu_char_select.png',
      './assets/ken_char_select.png',
      './assets/bison_char_select.png',
      './assets/viper_char_select.png',
      './assets/guy_char_select.png',
      './assets/rose_char_select.png',
    ];

    cacheImages(imgs);
  }, []);

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);

    setIsLoading(false)
  }

  const renderProjects = () => {
    return <Projects isLoading={isLoading} />
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/projects" element={renderProjects()} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
