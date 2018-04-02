import * as React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends React.Component {
  render() {
    const loginParams = {
      pathname: './templates'
    };

    return (
      <div className='login'>
        <input type='text' placeholder='TurusovRY' className='login__input login__input--user'/>
        <input type='password' placeholder='password' className='login__input login__input--pass'/>
        <Link to={loginParams} >
          <input type='button' value='Войти' className='login__input login__input--btn'/>
        </Link>
      </div>
    );
  }
}

export default Login;