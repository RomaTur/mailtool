import * as React from 'react';

interface InputProps {
  name: string;
}

class Input extends React.Component<InputProps, {}> {
  render() {
    return(
      <div className='form__input'>
        <span className='form__input-name'>{this.props.name}: </span>
        <input placeholder='input' className='form__input-input'/>
      </div>
    );
  }
}

export default Input;