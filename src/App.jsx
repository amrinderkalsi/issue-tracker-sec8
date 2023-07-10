import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/Navigation';
import Home from './routes/home/Home';
import About from './routes/about/About';
import NotFound from './routes/notfound/NotFound';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about/:id" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
