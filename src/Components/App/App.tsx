import * as React from 'react';
import './App.css';
// import { Route, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Login from '../Login/Login';
import Templates from '../Templates/Temlates';
import Template from '../Template/Template';

class App extends React.Component {
  render() {
    return (
      // <Route
      //   render={({ location }) => (
      //     <div className='App'>
      //       <header className='App__header'>
      //         mailtool
      //       </header>
      //       <TransitionGroup>
      //         {/* no different than other usage of
      //           CSSTransition, just make sure to pass
      //           `location` to `Switch` so it can match
      //           the old location as it animates out
      //       */}
      //         <CSSTransition key={location.key} classNames='fade' timeout={300}>
      //           <Switch location={location}>
      //             <Route exact path='/' component={Login} />
      //             <Route exact path='/templates' component={Templates} />
      //             <Route exact path='/template' component={Template} />
      //           </Switch>
      //         </CSSTransition>
      //       </TransitionGroup>
      //       <footer className='App__footer'>
      //         Copyright
      //       </footer>
      //     </div>
      //   )}
      // />
      <div className='App'>
        <header className='App__header'>
          mailtool
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
