import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './components/main/Home';
import Classes from './components/main/Classes';
import Kids from './components/main/Kids';
import About from './components/main/About';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
          <Route exact path='/' component={Home}/>
          <Route path='/classes' component={Classes}/>
          <Route path='/kids' component={Kids}/>
          <Route path='/about' component={About}/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
