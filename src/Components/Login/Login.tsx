import * as React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { TweenLite } from 'gsap';

class Login extends React.Component {
  private loginDiv: HTMLDivElement;

  componentDidMount() {
    TweenLite.fromTo(this.loginDiv, 0.4, { x: -10, opacity: '0' }, 
      { x: 0, opacity: '1', delay: 0.2 });
  }

  render() {
    const loginParams = {
      pathname: './templates'
    };

    return (
      <div className='login' ref={(loginDiv: any) => {this.loginDiv = loginDiv; }}>
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