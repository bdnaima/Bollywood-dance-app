import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/layout/Navigation';
import Home from './components/main/Home';
import Classes from './components/main/Classes';
import Media from './components/main/Media'
import Kids from './components/main/Kids';
import About from './components/main/About';
import Calendar from './components/main/Calender';
import Footer from './components/layout/Footer';
import UserProfile from './components/main/UserProfile';
import Admin from './components/main/Admin';

const App = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <div>
          <Navigation />
            <Route exact path='/' component={ Home }/>
            <Route path='/userprofile' component={ UserProfile } />
            <Route path='/classes' component={ Classes }/>
            <Route path='/media' component={ Media }/>
            <Route path='/calendar' component={ Calendar }/>
            <Route path='/kids' component={ Kids }/>
            <Route path='/about' component={ About }/>
            <Route exact path='/admin' component={ Admin }/>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
