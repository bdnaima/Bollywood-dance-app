import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';

import Navigation from './components/layout/Navigation';
import Home from './components/main/Home';
import Calendar from './components/main/Calender';
import Admin from './components/main/Admin';
import Events from './components/main/Events';
import Media from './components/main/Media';
import Gallery from './components/main/Gallery';
import About from './components/main/About';
import Footer from './components/layout/Footer';

const App = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <div>
          <Navigation />
          <Route exact path='/' component={ Home }/>
          <Route path='/calendar' component={ Calendar }/>
          <Route exact path='/admin' component={ Admin }/>
          <Route exact path='/events' component={ Events }/>
          <Route path='/media' component={ Media }/>
          <Route path='/gallery' component={ Gallery }/>
          <Route path='/about' component={ About }/>

          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
