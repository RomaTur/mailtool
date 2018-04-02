import * as React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

import Login from '../Login/Login';
import Templates from '../Templates/Temlates';
import Template from '../Template/Template';

class App extends React.Component {
  componentDidMount() {
    console.log(location);
  }
  
  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          mailtool
          <Link to='/'>Home</Link>
          <Link to='/templates'>Templates</Link>
          <Link to='/template'>Template</Link>
        </header>
          <Route exact path='/' component={Login} />
          <Route exact path='/templates' component={Templates} />
          <Route exact path='/template' component={Template} />
        <footer className='App__footer'>
          Copyright
        </footer>
      </div>
    );
  }
}

export default App;
