import * as React from 'react';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <div className='Login'>
        <input type='text' placeholder='TurusovRY'/>
        <input type='password' placeholder='password'/>
        <input type='button' value='Войти'/>
      </div>
    );
  }
}

export default Login;