import * as React from 'react';
import './App.css';

// import Login from '../Login/Login';
import Templates from '../Templates/Temlates';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        {/* <Login /> */}
        <header className='App__header'>
          mailtool
        </header>
        <Templates />
        <footer className='App__footer'>
          Copyright
        </footer>
      </div>
    );
  }
}

export default App;
