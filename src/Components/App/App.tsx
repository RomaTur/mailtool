import * as React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// import Login from '../Login/Login';
import Templates from '../Templates/Temlates';
import Template from '../Template/Template';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          mailtool
        </header>
          {/* <Route exact path='/' component={Login} /> */}
          <Route exact path='/' component={Templates} />
          <Route exact path='/template' component={Template} />
        <footer className='App__footer'>
          .
        </footer>
      </div>
    );
  }
}

export default App;
