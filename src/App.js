import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/layout/Navigation';
import Home from './components/main/Home';
import Gallery from './components/main/Gallery';
import Media from './components/main/Media'
import About from './components/main/About';
import Calendar from './components/main/Calender';
import Admin from './components/main/Admin';
import Footer from './components/layout/Footer';

const App = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <div>
          <Navigation />
          <Route exact path='/' component={ Home }/>
          <Route path='/gallery' component={ Gallery }/>
          <Route path='/media' component={ Media }/>
          <Route path='/calendar' component={ Calendar }/>
          <Route path='/about' component={ About }/>
          <Route exact path='/admin' component={ Admin }/>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
